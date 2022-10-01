const ElementHelper={};function getMaxiumSrcset(e){const t=/^-?\d+$/;var r,i=(r=e.split(/,+/).map(e=>{let r={};return e.trim().split(/\s+/).forEach((e,i)=>{if(0===i)return void(r.url=e);const n=e.slice(0,-1),s=e[e.length-1],c=Number.parseInt(n,10);"w"===s&&t.test(n)?c>0&&(r.width=c):"x"===s&&t.test(n)&&c>0&&(r.width=c)}),r})).sort().filter((e,t)=>JSON.stringify(e)!==JSON.stringify(r[t-1]));return(i=i.sort(function(e,t){return e.width>t.width?-1:e.width<t.width?1:0})).length>0&&i[0]&&i[0].width>0&&i[0].url?i[0].url:""}function regexNumber(e){let t=e.match(/(\d+)/);return t.length>0?parseInt(t[0]):0}function sourceFilter(e,t){let r=[...e.children];r=(r=r.filter(e=>"SOURCE"==e.tagName)).filter(e=>""==e.media||null==e.media);let i={"image/gif":1,"image/png":2,"image/jpeg":3,"image/jpg":3,"":4,undefined:4};t(r=(r=r.filter(e=>i[e.type])).sort((e,t)=>i[e.type]-i[t.type]))}function getPictureSourceSrc(e){let t="";return sourceFilter(e,function(e){logger.debug(`[content] source filter running, filteredSourceElement[${e.length}]`),e.length>0?(t=getMaxiumSrcset(e[0].srcset),logger.debug(`[content] element is picture changeing... src[${t}]`)):t=""}),t}ElementHelper.getHighestResImg=function(e){const t=/^-?\d+$/;let r=e.currentSrc||e.getAttribute("src");if(e.getAttribute("srcset")&&e.currentSrc&&-1===e.currentSrc.indexOf("pximg")){var i=e.getAttribute("srcset"),n=(s=i.split(/,+/).map(e=>{const r={};return e.trim().split(/\s+/).forEach((e,i)=>{if(0===i)return void(r.url=e);const n=e.slice(0,-1),s=e[e.length-1],c=Number.parseInt(n,10);Number.parseFloat(n);"w"===s&&t.test(n)?c>0&&(r.width=c):"x"===s&&t.test(n)&&c>0&&(r.width=c)}),r})).sort().filter((e,t)=>JSON.stringify(e)!==JSON.stringify(s[t-1]));return(n=n.sort(function(e,t){return e.width>t.width?-1:e.width<t.width?1:0})).length>0&&n[0]&&n[0].width>0&&n[0].url?n[0].url:r}return r;var s},ElementHelper.getBackgroundImage=function(e){for(;e;){if(e.hasAttribute("eagle-src"))return e.getAttribute("eagle-src");if("svg"===e.nodeName){let t=(new XMLSerializer).serializeToString(e);return"data:image/svg+xml;base64,"+btoa(t)}if(location.href.indexOf("pinterest.com")>-1){let t;if("IMG"==e.nodeName?t=e.getAttribute("src").split("/")[7]:"VIDEO"==e.nodeName&&(t=e.getAttribute("poster").split("/")[7]),"undefined"!=typeof VIDEO_URL_CACHE_MAP&&VIDEO_URL_CACHE_MAP[t])return VIDEO_URL_CACHE_MAP[t]}if(location.href.indexOf("dribbble.com")>-1&&"VIDEO"!==e.nodeName&&null!=e.closest("div")&&e.closest("div").classList.contains("video"))return e.closest("div").querySelector("video").getAttribute("src");if(location.href.indexOf("vk.com")>-1&&"VIDEO"===e.nodeName&&e.src)return t=window.jQuery(e).prop("currentSrc")||e.src;if("IMG"==e.nodeName){if(e.src&&!e.src.startsWith("blob:")||!e.src){if(e.srcset&&"string"==typeof e.srcset)if(t=ElementHelper.getHighestResImg(e))return t;return window.jQuery(e).prop("currentSrc")||e.src}if(e.src&&e.src.startsWith("blob:")){let t=document.createElement("canvas"),r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height),t.toDataURL()}}if("VIDEO"==e.nodeName){var t;let r=(t=e.src?window.jQuery(e).prop("currentSrc")||e.src:window.jQuery(e).find("source")[0].src||e.src).toLowerCase();return r.indexOf(".mp4")>-1||r.indexOf(".webm")>-1||r.indexOf("fbcdn.net")>-1?t:void 0}if("AUDIO"==e.nodeName&&(e.currentSrc&&!e.currentSrc.startsWith("blob:")||!e.currentSrc))return e.currentSrc;var r=getComputedStyle(e).getPropertyValue("background-image");if("none"!==r&&-1===r.indexOf("gradient")&&-1===r.indexOf("about:blank")&&-1===r.indexOf("overlay")){var i=r.match(/url\("?(.+?)"?\)/);if(i&&i[1])return i[1]}e=e.parentElement}};