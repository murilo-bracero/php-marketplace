<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{

    protected $model = \App\Products\Models\Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'        => fake()->word() . " " . fake()->colorName(),
            'description' => fake()->paragraph(),
            'price'       => fake()->randomFloat(2, 1, 100),
            'image_url'   => fake()->imageUrl(),
        ];
    }
}
