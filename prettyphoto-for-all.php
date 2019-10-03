<?php
/**
 * Plugin Name: prettyPhoto for All
 * Plugin URI: https://github.com/MIGHTYminnow/prettyphoto-for-all
 * Description: Makes prettyPhoto accessible.
 * Version: 1.0.0
 * Author: MIGHTYminnow
 * Author URI: https://mightyminnow.com
 */

/**
 * Enqueue child theme styles and scripts.
 */
if ( ! function_exists( 'ppa_enqueue_assets' ) ) {
	add_action( 'wp_enqueue_scripts', 'ppa_enqueue_assets', 11 );
	function ppa_enqueue_assets() {
		wp_deregister_script( 'prettyphoto' );
		wp_register_script( 'prettyphoto', plugin_dir_url( __FILE__ ) . 'js/jquery.prettyphoto.js', array( 'jquery' ), null, true );
		wp_enqueue_script( 'prettyphoto-for-all', plugin_dir_url( __FILE__ ) . 'js/prettyphoto-for-all.js', array( 'jquery' ), '1.0.0', true );
		wp_enqueue_style( 'prettyphoto-for-all', plugin_dir_url( __FILE__ ) . 'css/prettyphoto-for-all.css', array(), '1.0.0' );
	}
}
