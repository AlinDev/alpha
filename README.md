 
## Requirements

- [Yarn](https://yarnpkg.com/en/docs/install)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) 

## Installation

```bash
$ yarn install
```

## Running

```bash
$ yarn start
```

Then click "Run on Android device/emulator", "Run on iOS simulator", or "Run in web browser"
 

## Release

### iOS

- Increment the `ios.buildNumber` in `app.json`
- Run `yarn build:ios`
- Once the build completes, upload the `.ipa` file it created to TestFlight  
- 
### Web

```bash
$ yarn deploy
```

Deploys to configured Git pages site.
 
## License

MIT
