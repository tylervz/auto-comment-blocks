import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
  files: 'out/test/**/*.test.js',
  workspaceFolder: './',
  launchArgs: [
    '--user-data-dir=/tmp/vscode-test-data'
  ]
});
