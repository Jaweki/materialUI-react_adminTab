// multerConfig.js
import multer from 'multer';
import aws from 'aws-sdk';
import { S3 } from "@aws-sdk/client-s3";
import multerS3 from 'multer-s3';

aws.config.update({
  // Configure your AWS credentials and region
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_IMAGES_REGION,
});

const s3 = new S3();

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'staff-profile-image',
    acl: 'public-read', // Set the appropriate ACL for your use case
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const filename = `${req.body.jobId}_${req.body.username}`;
      cb(null, filename);
    },
  }),
});

