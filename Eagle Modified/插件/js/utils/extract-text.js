var ExtractTextTool={extractSiteTags:function(){var o=[],e=location.href.toLowerCase();return[{domain:"instagram.com",selector:"span a:contains(#)",remove:"#"},{domain:"behance.net",selector:".object-tag"},{domain:"dribbble.com",selector:".popular-tags .tag a"},{domain:"lymma.net",selector:".tags .tag"},{domain:"designspiration.net",selector:".descriptionTag",remove:"#"},{domain:"500px.com",selector:".tag-container .tag"},{domain:"artstation.com",selector:".tags .label-tag",remove:"#"},{domain:"abduzeedo.com",selector:".field__items .field__item a"},{domain:"fubiz.net",selector:".post-full-tags a"},{domain:"medium.com",selector:".tags a"},{domain:"uxplanet.org",selector:".tags a"},{domain:"medium.muz.li",selector:".tags a"},{domain:"httpster.net",selector:".Snapshot__tags .Tag"},{domain:"land-book.com",selector:".icon-bookmark ~ .website-attribute a"},{domain:"ui.cn",selector:".works-tag a"},{domain:"uisdc.com",selector:".tags [rel='tag']"},{domain:"uiiiuiii.com",selector:".itags .cont a"},{domain:"logopond.com",selector:"strong:contains(Tags) ~ a"},{domain:"deviantart.com",selector:".discoverytag",remove:"#"},{domain:"mydesy.com",selector:".cb-tags [rel='tag']"},{domain:"uplabs.com",selector:".post__side-preview-tag a"},{domain:"onepagelove.com",selector:".review-tags a"},{domain:"design-milk.com",selector:".tags a"},{domain:"unsplash.com",selector:"p:contains(Related tags) ~ div a"},{domain:"pinterest.com",selector:".AggregatedCloseupCard a:contains(#)",remove:"#"},{domain:"flickr.com",selector:".tags-list li"},{domain:"huaban.com",selector:"#tag-group a"},{domain:"zcool.com.cn/article",selector:".work-taglist .worktag-con a"},{domain:"zcool.com.cn/work",selector:".works-tag-wrap a"},{domain:"zhuanlan.zhihu.com",selector:".PostIndex-topicItem"},{domain:"toutiao.com",selector:".tag-list .tag-item"},{domain:"zhihu.com",selector:".QuestionHeader-topics .Tag-content a"},{domain:"gooood.hk",selector:".entry-spec a"},{domain:"archdaily.com",selector:".single-tags-cats__module .more-btns"},{domain:"archdaily.cn",selector:".single-tags-cats__module .more-btns"},{domain:"freshome.com",selector:".tags-nav a"},{domain:"home-designing.com",selector:".post-tags a"},{domain:"justeasy.cn",selector:"#biaoqianactive li a"},{domain:"sj33.cn",selector:".tagc2"}].forEach(function(a){if(e.indexOf(a.domain)>-1){var t=window.jQuery(a.selector).map(function(){var o=window.jQuery.trim(window.jQuery(this).text());return a.remove&&(o=o.replace(a.remove,"")),o}).get();o=t}}),o.join(",")}};