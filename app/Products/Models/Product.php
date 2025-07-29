<?php

namespace App\Products\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model {
    use HasFactory;

    protected static function booted(): void
    {
        static::creating(function (Model $model) {
            if(empty($model->external_id)) {
                $model->external_id = Str::uuid();
            }
        });
    }

    protected $fillable = [
        'name',
        'description',
        'price',
    ];
}