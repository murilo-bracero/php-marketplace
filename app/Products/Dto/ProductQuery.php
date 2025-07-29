<?php
namespace App\Products\Dto;

class ProductQuery
{
    public function __construct(
        public string $search,
        public string $page,
        public string $size
    ) {

    }

}
