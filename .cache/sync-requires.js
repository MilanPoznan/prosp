
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/milanpoznan/Documents/htdoc-front/prosp/prosperous/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/milanpoznan/Documents/htdoc-front/prosp/prosperous/src/pages/404.js")),
  "component---src-templates-page-template-js": preferDefault(require("/Users/milanpoznan/Documents/htdoc-front/prosp/prosperous/src/templates/page-template.js"))
}

