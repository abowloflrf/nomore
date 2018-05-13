//import jQuery so that zoom.js and code syntax highlight will work fine
window.$ = window.jQuery = require("jquery");

//add global style
import "../css/global.css";

// PrismJS code block syntax highlight congurations
$("pre").addClass("line-numbers language-");
var Prism = require("prismjs");
import "../css/prism-tomorrow.css";
import "../css/prism-line-numbers.css";
require("prismjs/plugins/line-numbers/prism-line-numbers.js");
var loadLanguages = require("prismjs/components/index.js");
loadLanguages([
    //add languages you want here
    "bash",
    "csharp",
    "c",
    "cpp",
    "go",
    "java",
    "json",
    "kotlin",
    "less",
    "lua",
    "makefile",
    "markdown",
    "nginx",
    "objectivec",
    "perl",
    "php",
    "python",
    "r",
    "jsx",
    "ruby",
    "rust",
    "sass",
    "scss",
    "sql",
    "swift",
    "typescript",
    "yaml"
]);
Prism.highlightAll();

//zoom.js
require("./zoom.js");