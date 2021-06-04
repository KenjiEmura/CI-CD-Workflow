module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/KenjiEmura/CI-CD-Workflow",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
