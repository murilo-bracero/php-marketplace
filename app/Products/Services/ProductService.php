<?php
namespace App\Products\Services;

use App\Products\Dto\ProductQuery;
use App\Products\Models\Product;

class ProductService
{

    public function __construct()
    {
        //
    }

    public function getProducts(ProductQuery $query)
    {
        return Product::query()
            ->skip($query->page * $query->size)
            ->take($query->size)
            ->get();
    }
}
