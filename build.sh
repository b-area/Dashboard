#!/bin/bash

for i in * ; do
  if [ -d "$i" ]; then
    cd $i
    echo "Installing packages in $i"
    npm install
    cd ..
  fi
done