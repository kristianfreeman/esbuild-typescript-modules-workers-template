# esbuild-typescript-modules-workers-template

Template for deploying projects with [Cloudflare Workers](https://workers.dev) + [Wrangler](https://github.com/cloudflare/wrangler), using [custom build support](https://developers.cloudflare.com/workers/cli-wrangler/configuration#build) with [ESBuild](https://esbuild.github.io). 

This template uses TypeScript, though you can customize the build settings in [`build.js`](https://github.com/signalnerve/esbuild-typescript-modules-workers-template/blob/main/build.js).

## Setup

1. Create a new repo based on this repo using the [template page](https://github.com/signalnerve/esbuild-typescript-modules-workers-template/generate)
2. Provide your `account_id` in `wrangler.toml` (or via `CF_ACCOUNT_ID` environment variable)

## Build/TypeScript validations

If you choose to use TypeScript with this template, note that via [`tsconfig.json`](https://github.com/signalnerve/esbuild-typescript-modules-workers-template/blob/main/tsconfig.json), this project configures `tsc` via the `noEmit` configuration option to _validate_ TypeScript code, but not _emit_ it. This means that you can run `npx tsc build` to check for TypeScript issues in your project (or see them in your editor, e.g. VSCode), but you should use `npm run build` (which shells out to `build.js`) to actually build your project for publication on Workers.

## Publish

You can publish your project using the traditional `wrangler publish` command.