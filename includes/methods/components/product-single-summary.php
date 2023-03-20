<?php

/**
 * Summary section
 */
add_filter('woocommerce_after_single_product_summary', 'growtype_wc_after_single_product_summary', 5);
function growtype_wc_after_single_product_summary()
{
    $single_description = growtype_wc_include_view('woocommerce.components.product-single-description');
    $single_details = growtype_wc_include_view('woocommerce.components.product-single-details');

    echo apply_filters('growtype_wc_after_single_product_summary_description', $single_description);
    echo apply_filters('growtype_wc_after_single_product_summary_details', $single_details);
}
