#!/bin/sh -l

# Here we are going to do the same that we did on the 'test_action' folder using JavaScript

# To make this work, you have to give this file executable permission by running the next command:
# chmod +x .github/actions/docker_test_action/entrypoint.sh

# This will make the step fail, any non-zero exit value will do that
# if [ true ]
# then
#   echo 'This is a pre-fabricated error'
#   exit 1
# fi

echo "::debug:: This is a debug message"
echo "::warning::This is a warning message"
echo "::error::This is an error message"

echo "::add-mask::$1"

echo "Hello $1"

time=$(date)

echo "::set-output name=time::$time"

echo "::group::Some expandable logs"
echo "A line inside the expandable log"
echo "A line inside the expandable log"
echo "A line inside the expandable log"
echo "A line inside the expandable log"
echo "A line inside the expandable log"
echo "::endgroup::"

echo "custom_env_variable=This variable was created from inside the 'entrypoint.sh' file" >> $GITHUB_ENV