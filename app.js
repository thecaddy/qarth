var koa = require('koa');
var app = module.exports = koa();

app.use(function *(){
  this.body = 'Hello The Caddy';
});

if (!module.parent) app.listen(3000);

  console.log('Started Server');
