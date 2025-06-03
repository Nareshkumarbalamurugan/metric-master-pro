import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const publicDir = 'public';
const distDir = 'dist';

// Create dist directory if it doesn't exist
if (!existsSync(distDir)) {
    mkdirSync(distDir);
}

// List of files to copy
const filesToCopy = [
    'favicon.ico',
    'manifest.json',
    'icon-192.png',
    'icon-512.png',
    'apple-touch-icon.png',
    'robots.txt',
    'sitemap.xml'
];

// Copy each file
filesToCopy.forEach(file => {
    const sourcePath = join(publicDir, file);
    const targetPath = join(distDir, file);

    if (existsSync(sourcePath)) {
        try {
            copyFileSync(sourcePath, targetPath);
            console.log(`Copied ${file} to dist directory`);
        } catch (error) {
            console.error(`Error copying ${file}:`, error);
        }
    } else {
        console.warn(`Warning: ${file} not found in public directory`);
    }
}); 