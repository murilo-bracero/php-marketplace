<?php
namespace App\Products\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    protected $table = 'stock';

    protected $fillable = [
        'product_id',
        'quantity',
    ];

    protected static function newFactory()
    {
        return \Database\Factories\StockFactory::new ();
    }
}
