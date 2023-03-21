!function(){"use strict";function e(){if(jQuery("body").hasClass("single-product")){jQuery(document).ready((function(e){r(),jQuery('.variations input[type="radio"]').change((function(){jQuery(this).closest(".options").find(".option").removeClass("is-active"),jQuery(this).closest(".option").addClass("is-active"),r()})),window.growtypeWcCartSelect.change((function(e){r()}))}));var e=null,t=e}function r(){var r=jQuery(".variations_form.cart"),o=r.data("product_id"),a=window["product_variations_"+o];jQuery('.variations_form button[type="submit"]').attr("disabled",!0);var i,n={};($(".variation-child").each((function(e,t){var r,o;$(t).find('input[type="radio"]:checked').length>0?(r=$(t).find('input[type="radio"]:checked').attr("name"),o=$(t).find('input[type="radio"]:checked').attr("data-category")):$(t).find("select").length>0&&(r=$(t).find("select").attr("name"),o=$(t).find("select option:selected").val()),n[r]=o})),Object.entries(n).length>0)&&(a.map((function(e){var t=!0;Object.entries(n).map((function(r){var o=r[0],a=r[1];e.attributes[o]!==a&&(t=!1)})),t&&(i=e)})),i&&(r.find(".variation_id").val(i.variation_id),function(e){e.price_html.length>0&&jQuery(".product .summary .price").replaceWith(e.price_html);jQuery(".product .summary .price").show()}(i),function(r){var o=r.image.full_src,a=r.image.src,i=r.image.srcset;jQuery(".flex-control-nav img").length>0&&jQuery(".flex-control-nav img").each((function(e,t){jQuery(t).attr("src")===r.image.gallery_thumbnail_src&&(!0,jQuery(t).trigger("click"))}));Object.entries(r.attributes).map((function(e,t){$(".featured-img-wrapper").attr("data-"+e[0],e[1])})),t!==a&&(t=a,$("body").hasClass("woocommerce-product-gallery-type-5")?function(r){var o=r.image.src;if($(".woocommerce-product-gallery__image .img-variation").remove(),e!==t){$('<img class="img-variation" src="'+o+'">').insertAfter(".woocommerce-product-gallery__image .wp-post-image")}$(".flex-control-nav .featured-img-wrapper").remove();var a=$(".woocommerce-product-gallery .featured-img-wrapper");$(".woocommerce-product-gallery .flex-control-nav li").map((function(e,t){$(t).append(a.clone())}))}(r):$(".woocommerce-product-gallery__image .wp-post-image").attr("data-large_image",o).attr("src",a).attr("srcset",i))}(i),jQuery('.variations_form button[type="submit"]').removeClass("disabled").removeClass("wc-variation-selection-needed").attr("disabled",!1)))}}jQuery(document).ready((function(){jQuery(document).ready((function(){if(jQuery(".woocommerce-product-gallery .flex-direction-nav").appendTo(".woocommerce-product-gallery .flex-viewport"),screen.width<1024)return!1;var e=jQuery(".woocommerce-product-gallery");e.find(".flex-control-nav img").attr("width",e.attr("data-thumbnail-width")),e.find(".flex-control-nav img").attr("height",e.attr("data-thumbnail-height")),e.hasClass("woocommerce-product-gallery-adaptive-height-enabled")&&jQuery("body").hasClass("woocommerce-product-gallery-type-2")?setTimeout((function(){var e=jQuery(".woocommerce-product-gallery .flex-viewport").height();if(jQuery(".woocommerce-product-gallery .flex-control-nav img").length*jQuery(".woocommerce-product-gallery").attr("data-thumbnail-height")>e){var t="woocommerce-product-gallery-height-small";e>400?t="woocommerce-product-gallery-height-medium":e>600&&(t="woocommerce-product-gallery-height-large"),jQuery(".woocommerce-product-gallery").addClass(t).find(".flex-control-nav").slick({infinite:!1,autoplay:!1,slidesToShow:3,centerMode:!1,arrows:!0,slidesToScroll:1,dots:!1,vertical:!0,responsive:[{breakpoint:500,settings:{slidesToShow:4}}]})}jQuery(".woocommerce-product-gallery__wrapper").resize()}),100):setTimeout((function(){jQuery("body").hasClass("woocommerce-product-gallery-type-2")?jQuery(".woocommerce .flex-control-nav li").length>5&&jQuery(".woocommerce .flex-control-nav").slick({infinite:!1,autoplay:!1,slidesToShow:4,centerMode:!1,arrows:!0,slidesToScroll:1,dots:!1,vertical:!0,responsive:[{breakpoint:500,settings:{slidesToShow:4}}]}):jQuery(".woocommerce .flex-control-nav li").length>4&&(jQuery(".woocommerce .flex-control-nav").slick({infinite:!1,autoplay:!1,slidesToShow:4,centerMode:!1,arrows:!0,slidesToScroll:1,dots:!1,responsive:[{breakpoint:500,settings:{slidesToShow:4}}]}),jQuery(".woocommerce .flex-control-nav").on("beforeChange",(function(e,t,r,o){var a=t.slideCount;console.log(a,r,o,"currentSlide, nextSlide")}))),jQuery(".woocommerce-product-gallery__wrapper").resize()}),100)})),jQuery(".is-slider-product .product").length>1&&jQuery(".is-slider-product").slick({infinite:!0,autoplay:!1,slidesToShow:4,centerMode:!1,arrows:!0,speed:1e3,autoplaySpeed:1e3,slidesToScroll:1,dots:!1,responsive:[{breakpoint:500,settings:{slidesToShow:1}}]}),function(e){if("undefined"==typeof wc_single_product_params)return!1;if(jQuery(".woocommerce-product-gallery-type-3").length>0){var t=function(e,t){this.$target=e,this.$images=jQuery(".woocommerce-product-gallery-type-3 .woocommerce-product-gallery figure",e),0!==this.$images.length?(this.initPhotoswipe=this.initPhotoswipe.bind(this),this.getGalleryItems=this.getGalleryItems.bind(this),this.openPhotoswipe=this.openPhotoswipe.bind(this),this.initPhotoswipe()):this.$target.css("opacity",1)};t.prototype.initPhotoswipe=function(){this.$target.on("click",".woocommerce-product-gallery-type-3 .woocommerce-product-gallery .e-img-wrapper a",this.openPhotoswipe),this.$target.on("click",".woocommerce-product-gallery-type-3 .woocommerce-product-gallery .btn-gallery",this.openPhotoswipe)},t.prototype.getGalleryItems=function(){var e=this.$images,t=[];return e.length>0&&e.each((function(e,r){var o=jQuery(r).find(".wp-post-image");if(o.length){var a=o.attr("data-large_image"),i=o.attr("data-large_image_width"),n=o.attr("data-large_image_height"),c={alt:o.attr("alt"),src:a,w:i,h:n,title:o.attr("data-caption")?o.attr("data-caption"):o.attr("title")};t.push(c)}})),t},t.prototype.openPhotoswipe=function(t){t.preventDefault();var r=jQuery(".pswp")[0],o=this.getGalleryItems(),a=jQuery(t.target),i=parseInt(a.attr("data-index")),n=e.extend({index:i,addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].textContent=e.title,!0):(t.children[0].textContent="",!1)}},wc_single_product_params.photoswipe_options);"function"==typeof PhotoSwipeUI_Default&&new PhotoSwipe(r,PhotoSwipeUI_Default,o,n).init()},new t(jQuery(document),wc_single_product_params)}}(jQuery),function(){function e(){jQuery(".quantity .btn").click((function(){var e=jQuery(this).closest(".quantity").find('input[type="number"]'),t=e.val().length>0?e.val():0,r=e.attr("max"),o=e.attr("min");if(jQuery(this).hasClass("btn-down")){if(o.length>0&&t<=o)return!1;t>0&&(t=parseInt(t)-1)}else if(jQuery(this).hasClass("btn-up")){if(r.length>0&&t>=r)return!1;t=parseInt(t)+1}e.val(t),e.change()}))}e(),jQuery(document.body).on("updated_cart_totals",(function(){e()}))}(),e(),jQuery,window.growtypeWcCartSelect=jQuery(".cart select"),window.growtypeWcSelectCartArgs={disable_search_threshold:20},window.growtypeWcCartSelect.length>0&&window.growtypeWcCartSelect.chosen&&window.growtypeWcCartSelect.chosen(window.growtypeWcSelectCartArgs),document.addEventListener("filterProductsByOrder",(function(){jQuery(".auction-time-countdown").length>0&&"undefined"!==$.SAcountdown&&jQuery(".auction-time-countdown").each((function(e){var t=jQuery(this).data("time"),r=jQuery(this).data("format"),o=!1;""==r&&(r="yowdHMS"),o="yes"==data.compact_counter;var a="";a=jQuery(this).hasClass("future")?'<div class="started">'+data.started+"</div>":'<div class="over">'+data.checking+"</div>",jQuery(" body").hasClass("logged-in")||(t=$.SAcountdown.UTCDate(-(new Date).getTimezoneOffset(),new Date(1e3*t))),jQuery(this).SAcountdown({until:t,format:r,compact:o,expiryText:a})}))})),jQuery('.widget .product-categories[data-children-collapse="true"] .cat-parent').map((function(e,t){(jQuery(t).hasClass("current-cat-parent")||jQuery(t).hasClass("current-cat"))&&jQuery(t).find("> a").after('<span class="btn btn-collapse"></span>')})),jQuery('.widget .product-categories[data-children-collapse="true"] .cat-parent .btn-collapse').click((function(e){e.preventDefault(),jQuery(this).parent().hasClass("is-collapsed")?(jQuery(this).parent().find(".children").slideDown(),jQuery(this).parent().removeClass("is-collapsed")):(jQuery(this).parent().find(".children").slideUp(),jQuery(this).parent().addClass("is-collapsed"))}))}))}();
//# sourceMappingURL=growtype-wc.js.map