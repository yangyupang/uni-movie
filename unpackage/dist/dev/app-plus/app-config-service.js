
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/search/search","pages/my/my","pages/detail/detail","pages/user/user","pages/login/login"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"洋芋影院","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#515151","selectedColor":"#f46f46","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/images/movie.png","selectedIconPath":"static/images/movie-select.png"},{"pagePath":"pages/search/search","text":"搜索","iconPath":"static/images/search.png","selectedIconPath":"static/images/search-select.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"static/images/my.png","selectedIconPath":"static/images/my-select.png"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-movie","compilerVersion":"2.6.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"洋芋影院","enablePullDownRefresh":true}},{"path":"/pages/search/search","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"搜索","titleNView":false}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","titleNView":false}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"电影详情"}},{"path":"/pages/user/user","meta":{},"window":{"navigationBarTitleText":"用户信息"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录/注册"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});