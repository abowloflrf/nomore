//import jQuery so that zoom.js and code syntax highlight will work fine
window.$ = window.jQuery = require("jquery");

//add global style
import "../css/global.css";

// PrismJS code block syntax highlight congurations
$("pre").addClass("language-");
var Prism = require("prismjs");
import "../css/prism.css";

//TODO: 这里使用了比较蠢的方法引入语言，之前使用loadLanguages的方法不知为何会引入所有文件导致打包后大小超过600k，待解决
require("prismjs/components/prism-bash.js");
require("prismjs/components/prism-c.js");
require("prismjs/components/prism-cpp.js");
require("prismjs/components/prism-clike.js");
require("prismjs/components/prism-css.js");
require("prismjs/components/prism-go.js");
require("prismjs/components/prism-java.js");
require("prismjs/components/prism-javascript.js");
require("prismjs/components/prism-json.js");
require("prismjs/components/prism-lua.js");
require("prismjs/components/prism-makefile.js");
require("prismjs/components/prism-markdown.js");
require("prismjs/components/prism-markup.js");
require("prismjs/components/prism-markup-templating.js");
require("prismjs/components/prism-php.js");
require("prismjs/components/prism-python.js");
require("prismjs/components/prism-ruby.js");
require("prismjs/components/prism-sql.js");
require("prismjs/components/prism-typescript.js");
require("prismjs/components/prism-yaml.js");
Prism.highlightAll();

//zoom.js
require("./zoom.js");
