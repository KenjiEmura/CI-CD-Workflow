// This file is being compiled using the next command:
// `npx ncc build .github/actions/hello/index.js -o .github/actions/hello/dist`
// We use the previous command to build a unified javascript file that will include
// all the code of the packages that we need (in this case, @actions/core and @actions/github)

const core = require("@actions/core");
const github = require("@actions/github");

try {
  const token = core.getInput("token");
  const title = core.getInput("title");
  const body = core.getInput("body");
  const assignees = core.getInput("assignees");

  // The octokit lives inside our github package
  // https://octokit.github.io/rest.js/v18#issues
  const octokit = new github.GitHub(token);
  const response = octokit.rest.issues.addAssignees({
    // owner: github.context.repo.owner,
    // repo: github.context.repo.repo,
    ...github.context.repo,
    title,
    body,
    assignees: assignees ? assignees.split("\n") : undefined,
  });

  core.setOutput("issue", JSON.stringify(response.data));
} catch (error) {
  core.setFailed(error.message);
}
