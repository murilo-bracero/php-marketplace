<?php
namespace App\Products\Dto;

use App\Products\Models\Product;

class ProductDto
{
    public function __construct(
        Product $product
    ) {
        $this->id          = $product->external_id;
        $this->name        = $product->name;
        $this->description = $product->description;
        $this->price       = $product->price;
        $this->imageUrl    = $product->image_url;
        $this->isInStock   = $product->stock->quantity > 0;
    }

    public string $id;
    public string $name;
    public string $description;
    public float $price;
    public string $imageUrl;
    public bool $isInStock;
}
