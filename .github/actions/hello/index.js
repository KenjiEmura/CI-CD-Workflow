// This file is being compiled using the next command:
// `npx ncc build .github/actions/hello/index.js -o .github/actions/hello/dist`
// We use the previous command to build a unified javascript file that will include
// all the code of the packages that we need (in this case, @actions/core and @actions/github)

const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error("Sample error");

  // We can log things to the output console if the ACTIONS_STEP_DEBUG is set to true in the secrets (repository settings)
  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");

  // We can choose which variables should be hidden if accidentally output
  const theSecret = "The secret...";
  core.setSecret(theSecret);
  core.debug(`The secret is ${theSecret}`);
  console.log(`The secret is ${theSecret}`);

  // We can set an expandable behaviour on objects that are too long
  core.startGroup("Logging the github object");
  console.log(
    "The @actions/github object: ",
    JSON.stringify(github, null, "\t")
  );
  core.endGroup;

  // We can set env variables that can be used in any subsequent steps
  core.exportVariable(
    "CUSTOM_ENV_VARIABLE",
    "This variable was created inside the /actions/hello/index.js file"
  );

  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);
  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log("The @actions/core object: ", JSON.stringify(core, null, "\t"));
} catch (error) {
  core.setFailed(error.message);
}
