var fs     = require('fs');
var requireDirectory = require('require-directory');
var routes = requireDirectory(module, './routes');

/**
 * Mount routes with directory.
 *
 * Examples:
 *
 *     // mount routes in app.js
 *     require('./config/routes')(app);
 *
 * @param {Object} app
 * @param {Object} routes
 * @param {String} pre
 * @return 
 * @api public
 */
function mount(app) {
  var r = arguments[1] || routes;
  var pre = arguments[2] || '';
  
  for (var k in r) {
    console.log('mount /' + pre + '' + k + " route");
  
    if(typeof r[k] == 'object') {
      console.log('this is a obj');
      mount(app, r[k], pre + k + '/');
    }else if(k === 'home') {
      app.use('/', r[k]);
    }else {
      app.use('/' + pre + '' + k, r[k]);
    }
  }
}

function mount_with_folder(app, routes_folder_path){
  var r = arguments[1] || './routes';
  
  console.log('mount routes_folder_path = ' + r)
  routes = requireDirectory(module, r);
  
  mount(app) ;
}

module.exports = mount_with_folder;