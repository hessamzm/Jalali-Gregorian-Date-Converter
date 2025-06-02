<?php
/*
Plugin Name: Jalali Gregorian Date Converter
Description: افزونه ساده تبدیل تاریخ شمسی و میلادی با ورودی جداگانه سال، ماه و روز و شورت‌کد [jalali_gregorian_converter]
Version: 1.0
Author: hessamzm
Author URI:https://github.com/hessamzm/Jalali-Gregorian-Date-Converter/
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: jalali-gregorian-converter
*/

if (!defined('ABSPATH')) {
    exit; // جلوگیری از دسترسی مستقیم
}

class JalaliGregorianConverter {

    public function __construct() {
        add_shortcode('jalali_gregorian_converter', [$this, 'render_converter']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
    }

    public function enqueue_scripts() {
        // استایل افزونه
        wp_enqueue_style('jalali-converter-style', plugin_dir_url(__FILE__) . 'jalali-converter-style.css');

        // اسکریپت افزونه
        wp_enqueue_script('jalali-converter-script', plugin_dir_url(__FILE__) . 'jalali-converter-script.js', [], false, true);
    }

    public function render_converter() {
        ob_start();
        ?>
        <div class="CustomBox_root__TwLvz ConvertDate_root__ff7y9 variant_container color_tertiary">
          <div class="header">مبدل تاریخ شمسی و میلادی</div>
          
          <label>تاریخ ورودی:</label>
          <div class="date-inputs">
            <input type="number" id="yearInput" placeholder="سال" min="1" />
            <input type="number" id="monthInput" placeholder="ماه" min="1" max="12" />
            <input type="number" id="dayInput" placeholder="روز" min="1" max="31" />
          </div>
      
          <label for="dateType">نوع تاریخ ورودی:</label>
          <select id="dateType">
            <option value="jalali">شمسی</option>
            <option value="gregorian">میلادی</option>
          </select>
      
          <button id="convertBtn">تبدیل تاریخ</button>
      
          <div class="result" id="result"></div>
        </div>
        <?php
        return ob_get_clean();
    }
}

new JalaliGregorianConverter();
