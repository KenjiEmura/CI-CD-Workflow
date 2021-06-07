#!/bin/sh -l

Here we are going to do the same that we did on the 'test_action' folder using JavaScript

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