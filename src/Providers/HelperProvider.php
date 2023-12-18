<?php
/** @noinspection PhpIllegalPsrClassPathInspection */

/*
 * Copyright © 2023. mPhpMaster(https://github.com/mPhpMaster) All rights reserved.
 */

namespace MPhpMaster\LaravelScrollToTop\Providers;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Schema\Builder;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

/**
 * Class HelperProvider
 *
 * @package MPhpMaster\LaravelScrollToTop\Providers
 */
class HelperProvider extends ServiceProvider
{
	public function register()
	{
		$this->registerMacros();

		if($this->app->runningInConsole()) {
			$this->publishes([
				__DIR__.'/../../config/' => config_path(),
			], 'scroll-to-top-config');

			$this->publishes([
				__DIR__.'/../../resources/js' => public_path('js'),
			], 'scroll-to-top-js');

		}

		$this->mergeConfigFrom(__DIR__.'/../../config/scroll_to_top.php', 'scroll_to_top');
	}

	/**
	 *
	 */
	public function registerMacros()
	{

	}

	/**
	 * Bootstrap services.
	 *
	 * @param Router $router
	 *
	 * @return void
	 */
	public function boot(Router $router)
	{
		// Builder::defaultStringLength(191);
		// Schema::defaultStringLength(191);

		if(class_exists(\Laravel\Nova\Nova::class)) {
			// loading custom files
			\Laravel\Nova\Nova::serving(
				function(\Laravel\Nova\Events\ServingNova $event) {
					\Laravel\Nova\Nova::provideToScript(
						[
							'scrollToTop' => (array) config('scroll_to_top'),
						],
					);

					$jsPath = public_path('js/scrollToTop.js');
					$jsPath = file_exists($jsPath) ? $jsPath : __DIR__.'/../../resources/js/scrollToTop.js';
					\Laravel\Nova\Nova::script('scrollToTop', $jsPath);
				},
			);
		}

	}

	/**
	 * @return array
	 */
	public function provides()
	{
		return [];
	}
}
