
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/menu"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 699, hash: '592ac1646ef6d66225532c993f5d894fa6a4023255de51c284a64fb218c4585f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '0691f706b9c67daa3a889131748025329be397595d869c2a64273fa02094c383', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2374, hash: '127d99bd5d5f044abde553f0ddf21d5a4879d8e7fc7f022495fc81da87fa7f89', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 4122, hash: 'dbacdb4d8657c2f582144cb9833a28da0f7608820c63a44c71c651c679ddfc88', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'styles-TZY2Z3TY.css': {size: 372, hash: '1IaP7cDOIqg', text: () => import('./assets-chunks/styles-TZY2Z3TY_css.mjs').then(m => m.default)}
  },
};
