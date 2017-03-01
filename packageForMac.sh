mkdir -p release
npm run webpack:prod
electron-packager . Source --platform=darwin --arch=x64 --overwrite --out=release
