import { spawn } from 'child_process';

console.log('Starting Next.js development server...');

const nextProcess = spawn('node', ['node_modules/.bin/next', 'dev', '--port', '5000'], {
  stdio: 'inherit'
});

nextProcess.on('error', (error) => {
  console.error('Failed to start Next.js:', error);
  process.exit(1);
});

nextProcess.on('exit', (code) => {
  if (code !== 0) {
    console.log(`Next.js process exited with code ${code}`);
    process.exit(code);
  }
});
