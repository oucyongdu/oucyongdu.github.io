yarn build
cd .vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:oucyongdu/oucyongdu.github.io.git master:test
cd -