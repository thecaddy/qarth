var koa = require('koa');
var app = module.exports = koa();

app.use(function *(){
  this.body = 'Hello World, Congratulations! \n';
});

if (!module.parent) app.listen(8080);

  console.log('Started Server');
