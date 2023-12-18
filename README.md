# Laravel Scroll page to top package.

## Dependencies:
* php >=8.1 **REQUIRED IN YOUR PROJECT**
* laravel >=9 **REQUIRED IN YOUR PROJECT**
* illuminate/support >=9 _composer will install it automaticly_
* laravel/helpers ^1.5 _composer will install it automaticly_

## Installation:
```shell
composer require mphpmaster/laravel-scroll-to-top
```

You can publish the config file with:

```shell
php artisan vendor:publish --tag="scroll-to-top-config"
```

This is the contents of the published config file:

```php
return [
	// accepts string
	'tag'              => 'button',

	// accepts empty|array|string
	'attributes'       => [
		'type' => 'button',
	],

	// accepts empty|string
	'toggle_key'       => 'alt+t',

	// accepts empty
	"radius"           => "10px",

	// accepts empty
	"padding"          => "10px",

	// falsy value = 20
	"minHeight"        => 20,

	/*
	 * x value to scroll to when button clicked.
	 *
	 * accepts number
	 */
	"scrollToPosition" => 0,


	/*
	 * Scroll behavior when button clicked.
	 * possible values: 'auto' | 'instant' | 'smooth'
	 * accepts string
	 */
	"scrollBehavior"   => 'smooth',

	// accepts empty string (it will read html dir attribute)
	"direction"        => "",

	// accepts empty
	"startSpaceSize"   => "30px",

	// accepts empty
	"bottomSpaceSize"  => "20px",

	// accepts empty|array|string
	"classes"          => [
		'inline-flex',
		'items-center',
		'justify-center',
		'focus:ring',
		'focus:ring-primary-200',
		'focus:outline-none',
		'rounded',
		'scrollToTop--Button',
		'align-middle',
		'text-primary-500',
		'hover:text-primary-600',
		'focus:text-primary-400 active:text-primary-600',
	],

	// accepts empty|string
	"content"          => <<<HTML
<svg class="inline-block hover:opacity-50" fill="currentColor" height="20" role="presentation" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
	<path clip-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
HTML,

	// accepts empty|string
	"css"              => <<<CSS
.scrollToTop--Button {
  border: 1px solid;
  background-color: inherit;
}
.scrollToTop--Button:hover {
  //background-color: #ccc;
}
CSS,

];
```

You can publish the js file to `public/js` with:

```shell
php artisan vendor:publish --tag="scroll-to-top-js"
```

## Usage:

### Laravel Nova (4+):
No need to add anything. Just edit the config as you like.

### Laravel:

You need to add the script tag to your front code:

```html
<script src="{{url('js/scrollToTop.js')}}"></script>
```

> **Important**: Do not forget to modify the config.


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

This Helper is open-sourced software licensed under the [MIT license](https://github.com/mPhpMaster/laravel-scroll-to-top/blob/master/LICENSE).

***

## Stand with Palestine 🇵🇸 <i>#FreePalestine</i>
