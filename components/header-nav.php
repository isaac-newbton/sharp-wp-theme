<?php

if(has_nav_menu('header-nav-eyebrow-menu')) {
    wp_nav_menu([
        'theme_location' => 'header-nav-eyebrow-menu'
    ]);
}

wp_nav_menu([
    'theme_location' => 'header-nav-menu'
]);
