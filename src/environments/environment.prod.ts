// var angularServer = 'localhost:4200'
// var apiServer = '127.0.0.1:7091'

export const environment = {
  production: true,
  apiBase: 'https://apiloginmanager-e6g2erhserg8dqbb.centralus-01.azurewebsites.net/api',
  protocol: 'https',
  host: 'apiloginmanager-e6g2erhserg8dqbb.centralus-01.azurewebsites.net/api',
  apiPath: '',
  get apiUrl() {
    return `${this.protocol}://${this.host}/${this.apiPath}`;
  }
};
