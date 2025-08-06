<?php
namespace App\Products\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Products\Services\ProductService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProductRenderController extends Controller
{

    public function __construct(protected ProductService $productService)
    {

    }

    public function renderProductPage($id)
    {
        $product = null;

        try {
            $product = $this->productService->findById($id);
        } catch (ModelNotFoundException $e) {
            Log::error("Could not find product with Id=" . $id, $e);
            abort(404);
        }

        return Inertia::render('product', ['product' => $product]);
    }
}
