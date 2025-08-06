<?php

use App\Products\Http\Api\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('api/products', [ProductController::class, "getProducts"])->name("products.getProducts");
