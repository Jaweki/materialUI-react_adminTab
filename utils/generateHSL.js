// Function to generate random HSL color
export const generateRandomHSL = () => {
    const randomHue = Math.floor(Math.random() * 361); // Random hue between 0 and 360
    const randomSaturation = Math.floor(Math.random() * 101); // Random saturation between 0 and 100
    const randomLightness = Math.floor(Math.random() * 101); // Random lightness between 0 and 100
  
    return `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;
}