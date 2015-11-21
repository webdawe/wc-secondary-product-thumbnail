=== WC Secondary Product Thumbnail ===
Contributors: frosdqy
Tags: woocommerce, thumbnail, secondary image, secondary thumbnail, product thumbnail, product image, hover effect, reveal, image flipper, front and back
Requires at least: 3.8
Tested up to: 4.3
Stable tag: 1.0.1
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Adds a hover effect that will reveal a secondary product thumbnail to product images in your WooCommerce store.

== Description ==

WC Secondary Product Thumbnail is a very simple plugin that adds a secondary product thumbnail on product archives that is revealed when you hover over the main product image.

This plugin is ideal if you'd like to display more than one image on product archives, and perfect if you want to display front and back images of clothing for example.

This is a fork of the [WooCommerce Product Image Flipper](https://wordpress.org/plugins/woocommerce-product-image-flipper/) plugin by James Koster. All previous changelogs can be found there.

Notable changes/improvements applied in this fork:

* Remove image moving up and down animations, now just simple fade in and fade out.
* Disable plugin's functionality on mobile devices (since this plugin is supposed to only work on devices with mouse).
* Improved themes compatibility.
* Works in IE8+ and all of the evergreen browsers.

= GitHub =
https://github.com/thewebflash/wc-secondary-product-thumbnail

== Installation ==

1. Upload `wc-secondary-product-thumbnail` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Done!

== Frequently Asked Questions ==

= How do I control which image is displayed on hover? =

Whichever image is first in the order of product gallery images will appear on hover.

= My secondary image is taller than the main product image and overlaps content when it fades in =

This is due to the secondary image being positioned absolutely. This is the cleanest way I can think to do this with CSS alone. You may want to consider hard cropping your product catalog thumbnails to ensure all images are the same dimensions in product archives.

= It doesn't work. Nothing happens when I hover over images? =

Check that the product you're checking has a gallery attached to it.


== Screenshots ==

1. A flipped image.

== Changelog ==

= 1.0.1 =
* Fix secondary thumbnail opacity issue on some themes.

= 1.0 =
* Initial version.
