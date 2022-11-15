<?php

function sharp_register_menus() {
    register_nav_menus([
        'header-nav-menu' => __('Header Navigation'),
        'header-nav-eyebrow-menu' => __('Header Eyebrow Navigation'),
    ]);
}
add_action('init', 'sharp_register_menus');
