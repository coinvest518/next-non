#!/usr/bin/env node

import { spawn } from 'child_process';

console.log('Starting Next.js development server...');

const nextProcess = spawn('npx', ['next', 'dev', '--port', '3000'], {
  stdio: 'inherit',
  shell: true
});

nextProcess.on('error', (error: any) => {
  console.error('Failed to start Next.js:', error);
  process.exit(1);
});

nextProcess.on('exit', (code: any) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code);
});