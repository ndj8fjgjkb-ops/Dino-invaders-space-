# Dino Invaders: Space

The playable website remains at the repository root for GitHub Pages. The same
game is packaged for iPhone with Capacitor in `ios/`.

## Prepare the iPhone project

Use Node.js 22+ and a Mac with Xcode 26+ for a signed device build:

```sh
npm ci
npm run ios:sync
open ios/App/App.xcodeproj
```

`npm run ios:sync` copies only `index.html`, Nova, and the in-game artwork into
the app; the bundled game works without a network connection. The project is
set to portrait iPhone orientation. The `iPhone build check` GitHub Action
checks an unsigned simulator build on a hosted Mac, so source changes can be
validated without a personal computer.

Before a TestFlight upload, the account holder needs to enroll in the Apple
Developer Program, confirm that
`com.curtiscompanylimited.dinoinvaders` is the desired available bundle ID,
create the app in App Store Connect, and configure signing under their team.
The unsigned simulator build does not create an installable TestFlight app.

The game's progress is stored on-device in local storage. This build has no
analytics, ads, accounts, or network dependency. The source and public-domain
space-image information are recorded in `ASSET_CREDITS.md`.
