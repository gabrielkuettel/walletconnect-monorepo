# Release Process for `algorand-walletconnect-qrcode-modal`

To release a new version of the `algorand-walletconnect-qrcode-modal` package, follow these steps:

1. Make sure the main branch, `v1.0`, contains the changes you wish to release. This likely includes running a variant of [`npm version`](https://docs.npmjs.com/cli/v8/commands/npm-version) to increment the version in `packages/helpers/qrcode-modal/package{-lock}.json`.

2. On a local copy of the repo, navigate to the repo root and run the following commands:
    
    ```bash
    npm run clean:all
    npm install
    npm run bootstrap
    npm run build
    ```

    These commands will clean the repo, reinstall all dependencies, and build all packages. Expect this to take a few minutes.

    At the end, you should have a `packages/helpers/qrcode-modal/dist` folder populated with the compiled package.

3. Point your terminal to `packages/helpers/qrcode-modal`.

3. (Optional) For testing purposes, run `npm pack` to build an archived version of the package that can be installed as a dependency elsewhere. This will be called something similar to `algorand-walletconnect-qrcode-modal-1.8.0.tgz`.
   
   This step is also useful because it shows you a list of files that will be included in the release. You can verify this lists looks like you'd expect (make sure it includes the `dist` folder!).

4. Run [`npm publish`](https://docs.npmjs.com/cli/v8/commands/npm-publish) to publish the release to npm. **NOTE:** if you intend to publish a prerelease, you **MUST** use the `tag` option to specify the release channel, which is "latest" by default.

5. Go to https://github.com/algorand/walletconnect-monorepo/releases and draft a new release. If you have not already created a tag with `npm version` or through other means, create one for the release now. The release body should contain changelog-level information about the new release.

6. Update downstream repos. The repos https://github.com/algorand/walletconnect-example-dapp and https://github.com/jasonpaulos/algorand-walletconnect-example-dapp use this package, so it's usually a good idea to update the dependency in these repos as well.
