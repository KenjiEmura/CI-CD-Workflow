const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error("Sample error");
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());
  console.log(
    "The @actions/github object: ",
    JSON.stringify(github, null, "\t")
  );
  console.log("The @actions/core object: ", JSON.stringify(core, null, "\t"));
} catch (error) {
  core.setFailed(error.message);
}
