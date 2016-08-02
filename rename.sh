#!/usr/bin/env bash

newAppName=$1

#appRoot=`dirname $0`/..
appRoot=`dirname $0`

[ -z "${newAppName}" ] && echo 'Missing required parameter newAppName' && exit 1

if ! [[ "${newAppName}" =~ ^[a-Z_][0-9a-Z_]*$ ]]; then
    echo "${newAppName} is not a valid name for a project. Please use a valid identifier name (alphanumeric)" && exit 1
fi

grep -rI 'RNStarter' --exclude='rename.sh' $appRoot/* | tr ':' ' ' | awk '{print $1}' | uniq | xargs -I{} sed -i.bak "s/RNStarter/${newAppName}/g" {}

find . -name '*.bak' -exec rm {} \;

for fileToMove in `find $appRoot/ios -depth -name '*RNStarter*'`; do
  mv $fileToMove `echo $fileToMove | sed "s/\(.*\)RNStarter/\1$newAppName/g"`
done

YELLOW='\033[1;33m'
CLEAR='\033[0m'
printf "\nRenamed application to ${newAppName}"
printf "${YELLOW}\n\nIf you have previously built the application, please clean your build artifacts"
printf "${YELLOW}\n\nAndroid:\n(cd android; ./gradlew clean)"
printf "${YELLOW}\n\niOS:\nClean build folders in XCode (Option+Shift+Cmd+K)\nReinstall CocoaPods (cd ios; pod install)\n"
