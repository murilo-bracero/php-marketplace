<?php
namespace App\Products\Http\Api\Controllers;

use App\Http\Controllers\Controller;
use App\Products\Dto\ProductQuery;
use App\Products\Services\ProductService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{

    public function __construct(protected ProductService $productService)
    {

    }

    public function getProducts(Request $request): Response
    {
        $size = $request->input('size', 10);
        $page = $request->input('page', 0);

        $products = $this->productService->getProducts(new ProductQuery("", $page, $size));

        return response($products, 200);
    }
}
