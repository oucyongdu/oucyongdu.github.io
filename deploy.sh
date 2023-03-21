yarn build
cd .vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:oucyongdu/homepage.git master:test
cd -