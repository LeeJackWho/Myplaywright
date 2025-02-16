import * as fs from 'fs';
import * as path from 'path';

const foldersToClean = [
  'test-results',
  'playwright-report',
  'reports',
  'screenshots'
];

const cleanup = () => {
  const rootDir = process.cwd();
  
  foldersToClean.forEach(folder => {
    const folderPath = path.join(rootDir, folder);
    if (fs.existsSync(folderPath)) {
      fs.rmSync(folderPath, { recursive: true, force: true });
      console.log(`已清理 ${folder} 目录`);
    }
  });
};

cleanup();