<?php

/**
 * Email details
 */
function growtype_wc_get_email_options()
{
    global $woocommerce;

    $mailer = $woocommerce->mailer();

    $email_options = array ();

    foreach ($mailer->emails as $key => $obj) {
        $email_options[$key] = $obj->title;
    }

    return $email_options;
}
