!function(){"use strict";function e(){if(jQuery("body").hasClass("single-product")&&void 0!==window.growtypeWc.productVariations){var e=jQuery(".variations_form.cart"),t=e.data("product_id");void 0!==t&&(window.growtypeWc.productVariations=window["product_variations_"+t]),jQuery(document).ready((function(e){o(),jQuery('.variations input[type="radio"]').change((function(){jQuery(this).closest(".options").find(".option").removeClass("is-active"),jQuery(this).closest(".option").addClass("is-active"),o(e(this))})),e('.variations-single select option[value=""]').attr("disabled",!0),e(".variations-single select").trigger("chosen:updated"),window.growtypeWcCartSelect.length>0&&window.growtypeWcCartSelect.change((function(t){o(e(this))}))}));var i=[],a=!0,r=null}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;jQuery('.variations_form button[type="submit"]').attr("disabled",!0),c(t),l(t);var i=s(),a=1===i.length?i[0]:null;a?(e.find(".variation_id").val(a.variation_id),p(a),m(a),g(a),jQuery('.variations_form button[type="submit"]').removeClass("disabled").removeClass("wc-variation-selection-needed").attr("disabled",!1)):jQuery(".product .summary .price").hide(),n(t)}function n(e){e?$(e).closest(".variations-single").nextAll(".variations-single").each((function(e,t){var a=$(t).attr("data-default-value");$(t).find("select").length>0?(""===a&&(a=$(t).find('select option[value!=""][disabled!="disabled"]').val()),""!==$(t).find("select").val()&&null!==$(t).find("select").val()||($(t).find('select option[value="'+a+'"]').attr("disabled")?(a=$(t).find('select option[value!=""][selected!="selected"]').val(),$(t).find("select").val(a)):i[$(t).attr("data-type")]?$(t).find("select").val(i[$(t).attr("data-type")]):$(t).find("select").val(a),$(t).find("select").trigger("chosen:updated"),$(t).find("select").trigger("change"))):$(t).find('input[type="radio"]').length>0&&($(t).find('input[type="radio"]').attr("checked")||($(t).find('input[type="radio"][value="'+a+'"]').closest(".option").hasClass("is-disabled")?$(t).find('.option:not(.is-disabled) input[type="radio"]').first().trigger("click"):i[$(t).attr("data-type")]?$(t).find('input[type="radio"][value="'+i[$(t).attr("data-type")]+'"]').first().trigger("click"):$(t).find('input[type="radio"][value="'+a+'"]').first().trigger("click")))})):$(".variations-single").each((function(e,t){var i=u($(t)),a=i.option.val(),r=$(t).attr("data-default-value");if(""!==r)if("select"===i.type){if($(t).find('select option[value="'+a+'"]:disabled').length>0){var o=$(t).find('select option[value!=""][disabled!="disabled"]').val();$(t).find("select").val(o),$(t).find("select").trigger("chosen:updated")}}else if("radio"===i.type){var n=$(t).find('input[type="radio"][checked!="checked"]').val(),c=$(t).find('.option input[type="radio"][checked="checked"]');if(c.length>0&&!c.closest(".option").hasClass("is-disabled"))return;setTimeout((function(){$(t).find('input[type="radio"][value="'+r+'"]').closest(".option").hasClass("is-disabled")?$(t).find('input[type="radio"][value="'+n+'"]').first().trigger("click"):$(t).find('input[type="radio"][value="'+r+'"]').first().trigger("click")}),100)}}));e&&(i[e.closest(".variations-single").attr("data-type")]=e.val())}function c(e){e&&e.closest(".variations-single").nextAll(".variations-single").each((function(e,t){var i=u($(t));$(t).attr("data-default-value");"select"===i.type?($(t).find("select").val(""),$(t).find("select").trigger("chosen:updated")):($(t).find(".options .option").removeClass("is-active").removeClass("is-disabled"),$(t).find("input").prop("checked",!1))}))}function l(e){var t=$(".variations-single.parent-variation");if(null===e){var i=u(t);""!==i.option.val()&&(e=i.option)}if(e&&""!==e.val()){var a=$(e).closest(".variations-single");a.next(".variations-single").removeClass("is-disabled");var r=u(a),o=s(),n=[];o.map((function(e,t){Object.entries(e.attributes).map((function(e,t){n[e[0]]?n[e[0]].push(e[1]):n[e[0]]=[e[1]]}))})),a.nextAll(".variations-single").each((function(e,t){if(0!==r.option.length&&""!==r.option.val()){var i=d($(t).attr("data-type")),a=void 0!==n[i]?n[i]:null;$(t).attr("data-default-value");a&&($(t).find("select").length>0&&($(t).find('select option[value!=""]').attr("disabled",!1),$(t).find("select option").map((function(e,t){""===$(t).val()||a.includes($(t).val())||$(t).attr("disabled",!0)})),$(t).next(".variations-single").removeClass("is-disabled"),$(t).find("select").trigger("chosen:updated")),$(t).find('input[type="radio"]').length>0&&$(t).find(".option").map((function(e,t){a.includes($(t).find("input").val())||$(t).addClass("is-disabled")})))}else $(t).next(".variations-single").addClass("is-disabled")}))}else t.nextAll(".variations-single").addClass("is-disabled")}function s(e){var t=function(){var e=$(".variations-single.parent-variation"),t=u(e),i=d(e.attr("data-type")),a=[];void 0!==window.growtypeWc.productVariations&&Object.entries(window.growtypeWc.productVariations).map((function(e){Object.entries(e[1].attributes).map((function(r,o){r[0]===i&&r[1]===t.option.val()&&a.push(e[1])}))}));return a}();return a||$(".variations .variations-single").each((function(e,i){if(!$(i).hasClass("parent-variation")){var a=u($(i)),r=d($(i).attr("data-type"));a.option.length>0&&""!==a.option.val()&&(t=t.filter((function(e){return e.attributes[r]===a.option.val()})))}})),a=!1,t}function d(e){return"attribute_"+e}function u(e){var t=e.find("select option:checked"),i=e.find("input:checked");return t.length>0?{type:"select",option:t}:{type:"radio",option:i}}function p(e){e.price_html.length>0&&jQuery(".product .summary .price").replaceWith(e.price_html),jQuery(".product .summary .price").show()}function g(e){e.variation_description&&e.variation_description.length>0?jQuery(".variations-single-description .variations-single-description-content").html(e.variation_description).closest(".variations-single-description").fadeIn():jQuery(".variations-single-description .variations-single-description-content").html("").closest(".variations-single-description").fadeOut(),e.custom_meta_product_details&&e.custom_meta_product_details.length>0&&(jQuery(".product-extra .product-extra-inner").removeClass("is-empty"),jQuery(".product-extra .product-extra-details .b-content-main .product-extra-details-content").remove(),jQuery(".product-extra .product-extra-details .b-content-main").prepend('<div class="product-extra-details-content">'+e.custom_meta_product_details+"</div>"),$(window).width()>640&&jQuery(".product-extra .product-extra-details video")&&jQuery(".product-extra .product-extra-details video").length>0&&jQuery(".product-extra .product-extra-details video").map((function(e,t){t.play()})))}function m(e){jQuery(".flex-control-nav img").length>0&&jQuery(".flex-control-nav img").each((function(t,i){jQuery(i).attr("src")===e.image.gallery_thumbnail_src&&(!0,jQuery(i).trigger("click"))})),Object.entries(e.attributes).map((function(e,t){$(".featured-img-wrapper").attr("data-"+e[0],e[1])})),$("body").hasClass("woocommerce-product-gallery-type-5")?function(e){e.image.full_src;var t=e.image.src;e.image.srcset;if(r!==t){r=t,$(".woocommerce-product-gallery__image .img-variation").remove(),$('<img class="img-variation" src="'+t+'">').insertAfter(".woocommerce-product-gallery__image .wp-post-image"),$(".flex-control-nav .featured-img-wrapper").remove();var i=$(".woocommerce-product-gallery .featured-img-wrapper");$(".woocommerce-product-gallery .flex-control-nav li").map((function(e,t){var a=i.clone();a.hide(),$(t).append(a),a.fadeIn()}))}}(e):function(e){var t=e.image.full_src,i=e.image.src,a=e.image.srcset;r!==i&&(r=i,$(".woocommerce-product-gallery__image .wp-post-image").attr("data-large_image",t).attr("src",i).attr("srcset",a))}(e)}}window.growtypeWc={},jQuery(document).ready((function(){$(".woocommerce-error .btn-close, .woocommerce-info .btn-close, .woocommerce-message .btn-close").click((function(){$(this).parent().fadeOut()})),function(e){if(0!==e(".woocommerce-product-gallery").length){var t=e(".woocommerce-product-gallery").attr("data-nav-slider-params");t=JSON.parse(t),e(document).ready((function(){if(jQuery(".woocommerce-product-gallery .flex-direction-nav").appendTo(".woocommerce-product-gallery .flex-viewport"),jQuery(".single .woocommerce-product-gallery").attr("data-slide-index",0),jQuery(".woocommerce-product-gallery").data("flexslider")&&(jQuery(".woocommerce-product-gallery").data("flexslider").vars.before=function(e,t){},jQuery(".woocommerce-product-gallery").data("flexslider").vars.after=function(t){e(".single .woocommerce-product-gallery").attr("data-slide-index",t.currentSlide)}),screen.width<1024)return!1;var i=jQuery(".woocommerce-product-gallery");i.find(".flex-control-nav img").attr("width",i.attr("data-thumbnail-width")),i.find(".flex-control-nav img").attr("height",i.attr("data-thumbnail-height")),i.hasClass("woocommerce-product-gallery-adaptive-height-enabled")&&jQuery("body").hasClass("woocommerce-product-gallery-type-2")?setTimeout((function(){var e=jQuery(".woocommerce-product-gallery .flex-viewport").height();if(jQuery(".woocommerce-product-gallery .flex-control-nav img").length*jQuery(".woocommerce-product-gallery").attr("data-thumbnail-height")>e){var i="woocommerce-product-gallery-height-small";e>400?i="woocommerce-product-gallery-height-medium":e>600&&(i="woocommerce-product-gallery-height-large"),t.vertical=!0,jQuery(".woocommerce-product-gallery").addClass(i).find(".flex-control-nav").slick(t)}jQuery(".woocommerce-product-gallery__wrapper").resize()}),100):setTimeout((function(){jQuery("body").hasClass("woocommerce-product-gallery-type-2")?jQuery(".woocommerce .flex-control-nav li").length>5&&(t.slidesToShow=4,jQuery(".woocommerce .flex-control-nav").slick(t)):jQuery(".woocommerce .flex-control-nav li").length>4&&(t.slidesToShow=4,jQuery(".woocommerce .flex-control-nav").slick(t)),jQuery(".woocommerce-product-gallery__wrapper").resize()}),100)}))}}(jQuery),jQuery(".is-slider-product .product").length>1&&jQuery(".is-slider-product").slick({infinite:!0,autoplay:!1,slidesToShow:4,centerMode:!1,arrows:!0,speed:1e3,autoplaySpeed:1e3,slidesToScroll:1,dots:!1,responsive:[{breakpoint:500,settings:{slidesToShow:1}}]}),function(e){if("undefined"==typeof wc_single_product_params)return!1;if(jQuery(".woocommerce-product-gallery-type-3").length>0){var t=function(e,t){this.$target=e,this.$images=jQuery(".woocommerce-product-gallery-type-3 .woocommerce-product-gallery figure",e),0!==this.$images.length?(this.initPhotoswipe=this.initPhotoswipe.bind(this),this.getGalleryItems=this.getGalleryItems.bind(this),this.openPhotoswipe=this.openPhotoswipe.bind(this),this.initPhotoswipe()):this.$target.css("opacity",1)};t.prototype.initPhotoswipe=function(){this.$target.on("click",".woocommerce-product-gallery-type-3 .woocommerce-product-gallery .e-img-wrapper a",this.openPhotoswipe),this.$target.on("click",".woocommerce-product-gallery-type-3 .woocommerce-product-gallery .btn-gallery",this.openPhotoswipe)},t.prototype.getGalleryItems=function(){var e=this.$images,t=[];return e.length>0&&e.each((function(e,i){var a=jQuery(i).find(".wp-post-image");if(a.length){var r=a.attr("data-large_image"),o=a.attr("data-large_image_width"),n=a.attr("data-large_image_height"),c={alt:a.attr("alt"),src:r,w:o,h:n,title:a.attr("data-caption")?a.attr("data-caption"):a.attr("title")};t.push(c)}})),t},t.prototype.openPhotoswipe=function(t){t.preventDefault();var i=jQuery(".pswp")[0],a=this.getGalleryItems(),r=jQuery(t.target),o=parseInt(r.attr("data-index")),n=e.extend({index:o,addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].textContent=e.title,!0):(t.children[0].textContent="",!1)}},wc_single_product_params.photoswipe_options);"function"==typeof PhotoSwipeUI_Default&&new PhotoSwipe(i,PhotoSwipeUI_Default,a,n).init()},new t(jQuery(document),wc_single_product_params)}}(jQuery),function(){function e(){jQuery(".quantity .btn").click((function(){var e=jQuery(this).closest(".quantity").find(".qty"),t=e.val().length>0?e.val():0,i=e.attr("max"),a=e.attr("min");if(jQuery(this).hasClass("btn-down")){if(a.length>0&&t<=a)return!1;t>0&&(t=parseInt(t)-1)}else if(jQuery(this).hasClass("btn-up")){if(i.length>0&&t>=i)return!1;t=parseInt(t)+1}e.val(t),e.change()}))}e(),jQuery(document.body).on("updated_cart_totals",(function(){e()}))}(),e(),function(e){window.growtypeWcCartSelect=jQuery(".cart select"),window.growtypeWcSelectCartArgs={disable_search_threshold:20},e(document).ready((function(){jQuery(".cart select option").filter((function(){return!this.value||0===e.trim(this.value).length||0===e.trim(this.text).length})),window.growtypeWcCartSelect.length>0&&window.growtypeWcCartSelect.chosen&&window.growtypeWcCartSelect.chosen(window.growtypeWcSelectCartArgs)})),e(document).on("updated_checkout cfw_updated_checkout",(function(t,i){setTimeout((function(){e("select").trigger("chosen:updated")}),1e3)})),e("body").hasClass("woocommerce-page")&&e(document).on("ajaxComplete",(function(){e("select").trigger("chosen:updated")}))}(jQuery),document.addEventListener("filterProductsByOrder",(function(){jQuery(".auction-time-countdown").length>0&&"undefined"!==$.SAcountdown&&jQuery(".auction-time-countdown").each((function(e){var t=jQuery(this).data("time"),i=jQuery(this).data("format"),a=!1;""==i&&(i="yowdHMS"),a="yes"==data.compact_counter;var r="";r=jQuery(this).hasClass("future")?'<div class="started">'+data.started+"</div>":'<div class="over">'+data.checking+"</div>",jQuery(" body").hasClass("logged-in")||(t=$.SAcountdown.UTCDate(-(new Date).getTimezoneOffset(),new Date(1e3*t))),jQuery(this).SAcountdown({until:t,format:i,compact:a,expiryText:r})}))})),jQuery('.widget .product-categories[data-children-collapse="true"] .cat-parent').map((function(e,t){(jQuery(t).hasClass("current-cat-parent")||jQuery(t).hasClass("current-cat"))&&jQuery(t).find("> a").after('<span class="btn btn-collapse"></span>')})),jQuery('.widget .product-categories[data-children-collapse="true"] .cat-parent .btn-collapse').click((function(e){e.preventDefault(),jQuery(this).parent().hasClass("is-collapsed")?(jQuery(this).parent().find(".children").slideDown(),jQuery(this).parent().removeClass("is-collapsed")):(jQuery(this).parent().find(".children").slideUp(),jQuery(this).parent().addClass("is-collapsed"))}))}))}();
//# sourceMappingURL=growtype-wc.js.map