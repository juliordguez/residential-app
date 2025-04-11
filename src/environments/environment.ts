// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

var angularServer = 'localhost:4200'
var apiServer = '127.0.0.1:7091'

export const environment = {
  production: false,
  backend: `http://${angularServer}`, // Put your backend here
  api: `http://${apiServer}`
};
