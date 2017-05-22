#!/usr/bin/env bash
mkdir ~/.tmpdeploy
cp -R docs ~/.tmpdeploy
$stash = (git stash create) 
git checkout master
cp -R ~./tmpdeploy/docs .
git add .
read -p "Commit message: " $message
git commit -m $message
rm -rf ~./tmpdeploy

