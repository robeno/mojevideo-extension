#!/bin/bash
rm mojevideo-chrome-extension.zip
zip -x ".git" -x "README.md" -x "build.sh" -x "*.DS_Store" -x chrome_assets\* -r mojevideo-chrome-extension.zip ./
echo "mojevideo-chrome-extension.zip created"