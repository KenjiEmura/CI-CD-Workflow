#!/bin/sh -l

# Here we are going to do the same that we did on the 'test_action' folder using JavaScript

# To make this work, you have to give this file executable permission by running the next command:
# chmod +x .github/actions/docker_test_action/entrypoint.sh

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

echo '::set-env name=CUSTOM_ENV_VARIABLE::hellooooooooo'