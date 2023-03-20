<?php

/**
 * Cart scripts
 */
add_action('wp_enqueue_scripts', 'growtype_cart_scripts_styles');
function growtype_cart_scripts_styles()
{
    wp_enqueue_script('growtype-wc-cart', GROWTYPE_WC_URL_PUBLIC . '/scripts/wc-cart.js', '', '', true);

    wp_localize_script('growtype-wc-cart', 'ajax_object',
        array (
            'ajaxurl' => admin_url('admin-ajax.php'),
        )
    );

}

include('actions/add-to-cart.php');
include('actions/load-cart.php');
include('actions/update-cart.php');
include('actions/redirect.php');
