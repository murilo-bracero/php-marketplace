<?php
namespace Database\Seeders;

use App\Products\Models\Product;
use App\Products\Models\Stock;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Product::factory(10)->create()->each(function (Product $product) {
            Stock::factory()->create(['product_id' => $product->id, 'quantity' => 10]);
        });
    }
}
