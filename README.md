# 4ga Boards Docs

Documentation for 4ga Boards

[4ga Boards Website](https://4gaboards.com)

[4ga Boards GitHub](https://github.com/RARgames/4gaBoards)

# Contribute

Our docs missing some crucial information?

Help us expanding 4ga Boards knowledge base.

You can help us expand 4ga Boards Docs e.g. by adding new knowledge, sharing setup trick or adding deployment method.

Check out [contribution guidelines](https://4gaboards.com/contribute#docs).

Submit Pull Request when your changes are ready, or if you are not sure how to use it describe 4ga Boards Docs issue by creating new issue.

## Requirements
Install Node.js and git.

Open terminal in the 4gaBoardsDocs directory to run commands below.

## Development
Clone 4ga Boards Docs repo
```
git clone https://github.com/RARgames/4gaBoardsDocs.git .
```
Install dependencies
```
npm i
```
Start development preview (website changes in realtime after your changes)
```
npm start
```
Start development preview in other language (e.g. pl for Polish)
```
npm start -- --locale pl
```
Regenerate translation files for locale (e.g. pl for Polish)
```
npm run write-translations -- --locale pl
```
Build Docs Locally
```
npm run build
```
View build in the browser
```
npm run serve
```

## License

[MIT license](https://github.com/RARgames/4gaBoardsDocs/blob/main/LICENSE)

## Main maintainers

[![RARgames](https://github.com/RARgames.png?size=100)](https://github.com/RARgames)
[![wilkobyl](https://github.com/wilkobyl.png?size=100)](https://github.com/wilkobyl)
