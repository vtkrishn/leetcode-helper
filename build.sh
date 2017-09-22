git pull
npm test
npm run cover
npm version patch -m "Version %s - %1"

git add .
git commit -m "%1"
git push && git push --tags
npm publish
