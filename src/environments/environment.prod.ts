// var angularServer = 'localhost:4200'
// var apiServer = '127.0.0.1:7091'

var angularServer = 'localhost:4200'
var apiServer = 'apiloginmanager-e6g2erhserg8dqbb.centralus-01.azurewebsites.net'


export const environment = {
  production: true,
  backend: `https://${angularServer}`, // Put your backend here
  api: `https://${apiServer}`};
