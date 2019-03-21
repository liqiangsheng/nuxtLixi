const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '不同（深圳）科技有限公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '「不同」以“让科技赋能设计，设计驱动产业升级”为使命，致力于打造以设计师品牌为核心的设计资源生态圈，通过建立行业资源的数字化链接，提升设计服务与产业需求的匹配效率，推动设计向产业聚焦，产业与设计融合。同时，我们推动最前沿的设计资讯分享和跨行业深度交流，聚焦海量原生设计第一现场，让大众领略设计之美，与广大设计师一起探索未来生活。' }
      ,{name:'keywords',content:'不同，设计师，工艺品生产制造，协会，活动，会议，合作，论坛，平台，社区'}
      ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/桌面图标.png' },
      {  rel:"stylesheet",href:"/css/reset.css"}
    ],
    script:[
      {type: 'text/javascript',src:'/js/rem.js'},
      {type: 'text/javascript',src:'/js/shujike.js'},
      // { innerHTML: "var _dgt = _dgt || [];" +
      // "window._dgt = _dgt;" +
      // "(function () {_dgt.push(['setSiteId', 'ef5d05738e2860b8']);" +
      // "var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];" +
      // "g.type = 'text/javascript';" +
      // " g.async = true;g.defer = true;g.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 't.shujike.com/dgt.js';" +
      // "s.parentNode.insertBefore(g, s);" +
      // "})();", type: 'text/javascript', charset: 'utf-8'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vue-lazy'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true,
  },
  proxy: {
    '/api/': {
      target: 'http://172.16.0.55:1234', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    },
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
