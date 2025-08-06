<?php
namespace App\Products\Services;

use App\Products\Dto\ProductDto;
use App\Products\Dto\ProductQuery;
use App\Products\Models\Product;

class ProductService
{

    /**
     * @return ProductDto[]
     */
    public function getProducts(ProductQuery $query)
    {
        return Product::query()
            ->skip($query->page * $query->size)
            ->take($query->size)
            ->get()
            ->map(fn(Product $product) => new ProductDto($product));
    }

    /**
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function findById(string $externalId): ProductDto
    {
        return new ProductDto(Product::query()->where('external_id', $externalId)->firstOrFail());
    }
}
