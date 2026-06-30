import Jimp from 'jimp';
import path from 'path';

async function processImage() {
  const sourcePath = 'C:/Users/uditg/.gemini/antigravity/brain/1ad6ffae-6b9b-46d2-ad57-726fdf48b1ce/udit_hero_no_checkerboard_1782860987924.png';
  const destPath = 'C:/Users/uditg/Documents/antigravity/busy-darwin/images/udit_hero_transparent.png';

  console.log('Loading image from:', sourcePath);
  const image = await Jimp.read(sourcePath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;

  // Visited array to prevent duplicate visits in BFS
  const visited = new Uint8Array(width * height);

  // Helper to get index
  const getIndex = (x, y) => y * width + x;

  // BFS Queue
  const queue = [];

  // Start BFS from all border pixels
  for (let x = 0; x < width; x++) {
    queue.push([x, 0]);
    queue.push([x, height - 1]);
    visited[getIndex(x, 0)] = 1;
    visited[getIndex(x, height - 1)] = 1;
  }
  for (let y = 0; y < height; y++) {
    queue.push([0, y]);
    queue.push([width - 1, y]);
    visited[getIndex(0, y)] = 1;
    visited[getIndex(width - 1, y)] = 1;
  }

  // Helper to check if pixel is part of the checkerboard background
  const isBackgroundPixel = (r, g, b, a) => {
    // If it's already transparent, it's background
    if (a < 50) return true;
    
    // Check if it's very bright (white checkerboard square)
    // or neutral light grey (grey checkerboard square)
    const isBright = r > 185 && g > 185 && b > 185;
    const isNeutral = Math.abs(r - g) < 20 && Math.abs(g - b) < 20 && Math.abs(r - b) < 20;

    return isBright && isNeutral;
  };

  let clearedCount = 0;

  // Queue index
  let qIdx = 0;
  while (qIdx < queue.length) {
    const [cx, cy] = queue[qIdx++];

    // Get color
    const pixelColor = image.getPixelColor(cx, cy);
    const rgba = Jimp.intToRGBA(pixelColor);

    if (isBackgroundPixel(rgba.r, rgba.g, rgba.b, rgba.a)) {
      // Set to transparent
      image.setPixelColor(0x00000000, cx, cy);
      clearedCount++;

      // Check 4 neighbors
      const neighbors = [
        [cx + 1, cy],
        [cx - 1, cy],
        [cx, cy + 1],
        [cx, cy - 1]
      ];

      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const idx = getIndex(nx, ny);
          if (!visited[idx]) {
            visited[idx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  console.log(`Cleared ${clearedCount} background pixels.`);
  
  // Write to destination
  await image.writeAsync(destPath);
  console.log('Successfully saved transparent image to:', destPath);
}

processImage().catch(err => {
  console.error('Error processing image:', err);
});
