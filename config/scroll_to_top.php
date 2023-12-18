<?php

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
