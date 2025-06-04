import { copyFileSync, existsSync, mkdirSync, unlinkSync } from 'fs';
import { join } from 'path';

const publicDir = 'public';
const distDir = 'dist';

// Create dist directory if it doesn't exist
if (!existsSync(distDir)) {
    mkdirSync(distDir);
}

// List of files to copy
const filesToCopy = [
    'manifest.json',
    'robots.txt',
    'sitemap.xml'
];

// List of files to ensure they don't exist in dist
const filesToRemove = [
    'favicon.ico',
    'icon-192.png',
    'icon-512.png',
    'apple-touch-icon.png'
];

// Remove unwanted files from dist if they exist
filesToRemove.forEach(file => {
    const targetPath = join(distDir, file);
    if (existsSync(targetPath)) {
        try {
            unlinkSync(targetPath);
            console.log(`Removed ${file} from dist directory`);
        } catch (error) {
            console.error(`Error removing ${file}:`, error);
        }
    }
});

// Copy each allowed file
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