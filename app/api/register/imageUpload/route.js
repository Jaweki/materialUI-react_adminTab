import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';
import sharp from 'sharp';
import { v4 as uuid } from 'uuid';

const uploadImageToS3 = async (file, fileName) => {
    try {
        const s3Client = new S3Client({
            region: process.env.S3_UPLOAD_REGION,
            credentials: {
              accessKeyId: process.env.S3_UPLOAD_KEY,
              secretAccessKey: process.env.S3_UPLOAD_SECRET,
            },
        });

      const resizedImageBuffer = await sharp(file)
        .resize(400, 500)
        .toBuffer();
  
      const params = {
        Bucket: process.env.S3_UPLOAD_BUCKET,
        Key: `${Date.now()}-${fileName}`,
        Body: resizedImageBuffer,
        ContentType: 'image/*',
      };
  
      const command = new PutObjectCommand(params);
      await s3Client.send(command);
  
      return fileName;
    } catch (error) {
      // Log the specific error for debugging purposes
      console.error('Error uploading image to S3:', error);
      throw new Error('Failed to upload image to S3');
    }
};

export const POST = async (req, res) => {
    try {
      const formData = await req.formData();
      console.log("formData: ", formData);
      const file = formData.get('file');
      console.log("file: ", file);

        if (!file) {
          return new NextResponse(
            JSON.stringify({
              statusData: 'Error. No file found in the form data.',
            }),
            { status: 400 }
          );
        }

        const mimeType = file.type;
        let fileExtension;

        if (mimeType) {
          const parts = mimeType.split('/');
          if (parts.length === 2) {
            fileExtension = parts[1];
          }
        }
        console.log("fileExtension: ", fileExtension)
  
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = await uploadImageToS3(buffer, `${uuid()}.${fileExtension}`);
  
      return new NextResponse(
        JSON.stringify({
          statusData: 'Success. Image uploaded to S3 bucket successfully',
          imageMetadata: fileName,
        }),
        { status: 201 }
      );
    } catch (error) {
      console.error('Error uploading image:', error);
      return new NextResponse(
        JSON.stringify({
          statusData: 'Error. Failed to upload image to S3.',
        }),
        { status: 500 }
      );
    }
};