!async function(){var e,a={default:{progress:{message:"Saving...",cancel:"Cancel"},finish:{msg1:"Scan complete, ",msg2:"{count} duplicated image(s) found, ",msg3:"{count} image(s) have been added to Eagle."}},de:{progress:{message:"wird heruntergeladen...",cancel:"Abbrechen"},finish:{msg1:"Scan complete, ",msg2:"{count} duplicated image(s) found, ",msg3:"{count} image(s) have been added to Eagle."}},es:{progress:{message:"Descargando...",cancel:"Cancelar"},finish:{msg1:"Scan complete, ",msg2:"{count} duplicated image(s) found, ",msg3:"{count} image(s) have been added to Eagle."}},ru:{progress:{message:"Загрузка...",cancel:"Отменить"},finish:{msg1:"Scan complete, ",msg2:"{count} duplicated image(s) found, ",msg3:"{count} image(s) have been added to Eagle."}},ko:{progress:{message:"다운로드 중...",cancel:"취소"},finish:{msg1:"Scan complete, ",msg2:"{count} duplicated image(s) found, ",msg3:"{count} image(s) have been added to Eagle."}},ja:{progress:{message:"ダウンロード...",cancel:"キャンセル"},finish:{msg1:"スキャンが完了し、",msg2:"重複した画像が{count}個見つかり、",msg3:"{count}個の画像がEagleに追加されました。"}},"zh-TW":{progress:{message:"正在儲存...",cancel:"取消"},finish:{msg1:"掃描完成，",msg2:"找到 {count} 張重複的內容，",msg3:"已將 {count} 張圖像添加到 Eagle。"}},"zh-CN":{progress:{message:"正在保存...",cancel:"取消"},finish:{msg1:"扫描完成，",msg2:"找到 {count} 张重复的内容，",msg3:"已将 {count} 张图像添加到 Eagle。"}}},t=a.default,n=window.navigator.language.toLowerCase(),r={zh:"zh-CN",es:"es",de:"de",ru:"ru",ja:"ja",ko:"ko",en:"en"}[n.split("-")[0]];function o(){var a=jQuery(`\n            <div class="eagle-save-board-progress-bar">\n                <div class="eagle-save-board-progress-bar-icon"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTIuNjY2N0gxNFYxNEgyVjEyLjY2NjdaTTguNjY2NjcgNi4wMDAwMkgxMy4zMzMzTDggMTEuMzMzNEwyLjY2NjY3IDYuMDAwMDJINy4zMzMzM1YwLjY2NjY4N0g4LjY2NjY3VjYuMDAwMDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"/></div>\n                <div class="eagle-save-board-progress-bar-message">${t.progress.message} <span></span></div>\n                <div class="eagle-save-board-progress-bar-cancel">${t.progress.cancel}</div>\n            </div>\n        `);a.find(".eagle-save-board-progress-bar-cancel").on("click",function(){s(),clearInterval(e)}),jQuery("body").append(a)}function s(){jQuery(".eagle-save-board-progress-bar").remove()}"zh-tw"===n?t=a["zh-TW"]:a[r]&&(t=a[r]),async function(){let a,n=location.href;if((await async function(){return new Promise(async e=>{let a=[{site:"huaban",urlPattern:"huaban.com/boards",selector:{title:"h1",image:".infinite-scroll-component a[href*='pins'] img",link:".infinite-scroll-component a[href*='pins']",box:"[data-pin-id]",spinner:".loading"}},{site:"pinterest",urlPattern:"pinterest.",selector:{title:"h1",image:"[data-grid-item] a img[srcset]",link:"[data-grid-item] a",box:"[data-grid-item]",spinner:'[aria-label="Board Pins grid"]',ignoreAlt:!0}},{site:"dribbble",urlPattern:"dribbble.com/",selector:{title:"h1",image:"[data-thumbnail-id] img",link:"[data-thumbnail-id] a.shot-thumbnail-link",box:"[data-thumbnail-id]",spinner:".loading-more .processing",moreBtn:".load-more"}},{site:"meiye",urlPattern:"meiye.art/",selector:{scrollEle:".overBoxCon",title:"h1",image:'.app-main .imgBox .wrap img[src*="image.meiye.art"]',link:'.app-main .imgBox .wrap img[src*="image.meiye.art"]',box:'.app-main .imgBox .wrap img[src*="image.meiye.art"]',spinner:"#load"}}];ajax({type:"GET",url:"https://oss-app.eagle.cool/extensions/batch-save-image-rules.json",dataType:"json",timeout:3e3},function(t){return t&&t.length?e(t):e(a)})})}()).forEach(function(e){-1!==n.indexOf(e.urlPattern)&&(a=e)}),!a)return;var r,i=Date.now(),l=0,c={imageCount:0,imageSet:{},linkSet:{},folderId:""};let g=window;a.selector.scrollEle&&(g=document.querySelector(a.selector.scrollEle)||window);var m=function(){var e=Array.from(document.querySelectorAll(a.selector.image));return(e=e.filter(function(e){var a=e.src;if(n){var t=e.closest("a");if(t){var n=t.href;c.linkSet[n]=!0}}return!c.imageSet[a]&&(c.imageSet[a]=!0,!0)})).map(function(e,t){var n;c.imageCount++,n=c.imageCount,jQuery(".eagle-save-board-progress-bar-message span").text(`(${n})`);let r=ElementHelper.getBackgroundImage(e)||e.src,o=new URL(r);return o.searchParams.append("v",Date.now()),r=decodeURIComponent(o.href),{name:(s=e,l=s.closest(a.selector.box),(s.alt&&!a.selector.ignoreAlt?s.alt:l&&l.textContent?l.textContent:"")||document.querySelector("title").text),url:r,website:function(e){if(a.selector.link)for(var t=Array.from(document.querySelectorAll(a.selector.link)),n=0;n<t.length;n++)if(t[n].contains(e))return f(t[n].href);return""}(e),modificationTime:i-c.imageCount};var s,l})},d=function(){var n=window.scrollY;if(g.scrollTo(0,(g.scrollY||g.scrollTop||0)+(g.innerHeight||g.offsetHeight||100)/2),r=g.scrollY||g.scrollTop||0,u(m()),a.selector.moreBtn){let e=document.querySelector(a.selector.moreBtn);e&&e.click()}if(r===n||0===n){var o=document.querySelector(a.selector.spinner);o&&o.offsetParent&&!document.querySelector(a.selector.endElem)||++l>=20&&(clearInterval(e),s(),setTimeout(function(){let e=Object.keys(c.linkSet).length-c.imageCount;e>0?alert(`${t.finish.msg1}${t.finish.msg2.replace("{count}",e)}${t.finish.msg3.replace("{count}",c.imageCount)}`):alert(`${t.finish.msg1}${t.finish.msg3.replace("{count}",c.imageCount)}`)},300))}else{l=0;var i=m();u(i)}},u=function(e){e&&0!==e.length&&e.forEach(function(e){UrlHelper.toLargeUrlAsync(e.url).then(function(a){e.url=a,ajax({type:"POST",url:"http://localhost:41595/api/item/addFromURLs",data:JSON.stringify({items:[e],folderId:c.folderId}),timeout:500},function(e){})})})};function f(e){e&&e.indexOf(" ")>-1&&(e=e.trim().split(" ")[0]);var a=document.createElement("a");return a.href=e,a.href}g.scrollTo(0,0),r=g.scrollY||g.scrollTop||0,o(),function(e,a){ajax({type:"POST",url:"http://localhost:41595/api/folder/create",data:JSON.stringify({folderName:e}),timeout:500},function(e){try{"success"===e.status&&e.data&&e.data.id?a(void 0,e.data):a(!0)}catch(e){a(!0)}})}(jQuery(a.selector.title).text()||document.querySelector("title").text,function(a,t){t&&(c.folderId=t.id,e=setInterval(d,100))})}()}();