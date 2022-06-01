curl https://api.travis-ci.com/v3/job/${TRAVIS_JOB_ID}/log.txt | tr -d '[:;vOK123456789><@' | sed -e 's/ $/\n/g' > fileNorm.txt
filter=$(cat fileNorm.txt | grep 'The command "npm test" exited with ')
res=$(echo "$(echo $filter | awk '{split($0,a,"with "); print a[2]}')" | cut -c1-1)
case $res in
[0]*)
   curl PATCH -i -H "Accept: application/vnd.github.baptiste-preview+json" -H "Content-Type: application/json" -H "Authorization: token $GH_API_TOKEN" -d "{ \"private\": \"true\"}" https://api.github.com/repos/${TRAVIS_REPO_SLUG}
  ;;
*)
  ;;
esac
e
rm fileNorm.txt
