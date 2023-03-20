<?php

/**
 * Enqueue scripts
 */
add_action('wp_enqueue_scripts', 'growtype_wc_widgets_scripts');
function growtype_wc_widgets_scripts()
{
    if (!is_admin()) {
        wp_enqueue_script('wc-widgets', GROWTYPE_WC_URL_PUBLIC . '/scripts/wc-widgets.js', '', '', true);

        wp_localize_script(
            'wc-widgets',
            'woocommerce_params_widgets',
            array (
                'orderby' => 'menu_order',
                'categories_ids' => [],
            )
        );
    }
}

/**
 * Ajax
 */
include('ajax/products-filtering.php');

/**
 * Widgets
 */
add_action('widgets_init', 'override_woocommerce_widgets', 15);
function override_woocommerce_widgets()
{
    /**
     * Sidebar shop
     */
    $config = [
        'description' => esc_html__('Add widgets here.', 'growtype-wc'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h5 class="widget-title">',
        'after_title' => '</h5>',
    ];

    register_sidebar([
            'name' => __('Shop sidebar', 'growtype-wc'),
            'id' => 'sidebar-shop'
        ] + $config);

    /**
     * WC_Widget_Layered_Nav_Filters
     */
    if (class_exists('WC_Widget_Layered_Nav_Filters')) {
        unregister_widget('WC_Widget_Layered_Nav_Filters');
        include('components/Custom_WC_Widget_Layered_Nav_Filters.php');
        register_widget('Custom_WC_Widget_Layered_Nav_Filters');
    }

    /**
     * WC_Widget_Product_Categories
     */
    if (class_exists('WC_Widget_Product_Categories')) {
        unregister_widget('WC_Widget_Product_Categories');
        include('components/Custom_WC_Widget_Product_Categories.php');
        register_widget('Custom_WC_Widget_Product_Categories');
    }

    /**
     * WC_Widget_Product_Categories
     */
    if (class_exists('WC_Widget_Product_Tag_Cloud')) {
        unregister_widget('WC_Widget_Product_Tag_Cloud');
        include('components/Custom_WC_Widget_Product_Tag_Cloud.php');
        register_widget('Custom_WC_Widget_Product_Tag_Cloud');
    }
}
