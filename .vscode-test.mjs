import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
  files: 'out/src/test/**/*.test.js',
  workspaceFolder: './',
  launchArgs: [
    '--user-data-dir=/tmp/vscode-test-data'
  ]
});
