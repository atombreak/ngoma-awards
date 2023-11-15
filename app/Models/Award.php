<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Award extends Model
{
    use HasFactory;

    public function categories()
{
    return $this->hasMany(AwardsCategory::class, 'award_id');
}
}
