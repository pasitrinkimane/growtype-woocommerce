<div class="b-payment-methods" style="justify-content: <?php echo $params['justify_content'] ?>;">
    <?php foreach ($icons as $icon) { ?>
        <div class="b-payment-methods-single <?php echo isset($icon['class']) ? $icon['class'] : ''; ?>">
            <img src="<?php echo $icon['url']; ?>" alt="">
        </div>
    <?php } ?>
</div>
