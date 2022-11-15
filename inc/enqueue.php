<?php

function sharp_enqueue_scripts_and_styles() {
    wp_enqueue_script('sharp-custom-scripts', get_stylesheet_directory_uri() . '/dist/js/custom.min.js');
    wp_enqueue_style('sharp-base-style', get_stylesheet_uri());
    wp_enqueue_style('sharp-main-style', get_template_directory_uri() . '/dist/css/main.min.css');
}
add_action('wp_enqueue_scripts', 'sharp_enqueue_scripts_and_styles');
