!function(t){document.addEventListener("filterProductsByOrder",m),document.addEventListener("filterProductsByPrice",m);var e="<span class='spinner-border'><div></div><div></div></span>",i=jQuery(".wishlist main .content");function s(t,e){return e.indexOf(t)>-1}Array.prototype.unique=function(){return this.filter((function(t,e,i){return i.indexOf(t)===e}))};var r=woocommerce_params_wishlist.shop_name+"-wishlist",n=woocommerce_params_wishlist.in_wishlist_text,a=woocommerce_params_wishlist.rest_url,o=new Array,u=sessionStorage.getItem(r),l=!!jQuery("body").hasClass("logged-in"),d="";function c(){i.append(e),t.ajax({type:"POST",url:woocommerce_params.ajax_url,data:{action:"fetch_user_data",dataType:"json",wishlist_ids:o},success:function(t){i.find(".spinner-border").remove(),d=JSON.parse(t),o=d.wishlist_ids,i.length>0&&(0===i.find(".products").length?i.hide().html(d.wishlist).fadeIn():i.html(d.wishlist)),l&&sessionStorage.removeItem(r),m()},error:function(){}})}function h(s){s.on("click",(function(a){if(a.preventDefault(),!jQuery(this).hasClass("is-loading")){if(jQuery(this).addClass("is-loading"),jQuery(this).hasClass("is-active")){jQuery(this).removeClass("is-active"),jQuery("body").hasClass("wishlist")&&jQuery(this).closest(".product").fadeOut().promise().done((function(){jQuery(this).remove()}));for(var u=o.length-1;u>=0;u--)o[u]==jQuery(this).data("product")&&o.splice(u,1)}else jQuery(this).addClass("is-active"),o.push(jQuery(this).data("product").toString());0===(o=o.unique().filter((function(t){return""!==t}))).length&&i.length>0&&i.append(e),jQuery(".e-wishlist").attr("data-amount",o.length),l?t.ajax({type:"POST",url:woocommerce_params_wishlist.ajax_post,data:{action:"user_wishlist_update",user_id:d.user_id,wishlist_ids:o.join(",")}}).done((function(t){0===o.length&&c()})).fail((function(t){alert(woocommerce_params_wishlist.error_text)})):(sessionStorage.setItem(r,o.toString()),0===o.length&&c()),h=s,m=n,setTimeout((function(){h.removeClass("is-loading").attr("title",m)}),500)}var h,m}))}function m(){o=o.filter((function(t){return""!=t})),jQuery(".e-wishlist").attr("data-amount",o.length),jQuery(".wishlist-toggle").each((function(){var t=jQuery(this);if(!l){var e=t.data("product");e=e.toString(),!l&&s(e,o)&&t.addClass("is-active").attr("title",n)}h(t)}))}l?c():(void 0!==u&&null!=u&&(u=(u=u.split(",")).unique(),o=u),i.length>0?c():m()),h(jQuery(".wishlist-toggle")),setTimeout((function(){o.length&&(a+="?include="+o.join(","),a+="&per_page="+o.length,t.ajax({dataType:"json",url:a}).done((function(t){})).fail((function(t){alert(woocommerce_params_wishlist.no_wishlist_text)})))}),1e3)}(jQuery);
//# sourceMappingURL=wc-wishlist.js.map