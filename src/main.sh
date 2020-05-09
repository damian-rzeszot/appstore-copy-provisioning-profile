#!/bin/sh -l

provisioning_profile=$1

# Validate

if [ ! -f "$provisioning_profile" ]
then
  echo "::error::Provisioning Profile file not found"
  exit 1
fi

echo "Hello $provisioning_profile"
