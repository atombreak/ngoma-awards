<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'awards_category_id',
    ];


    public function awardsCategory()
    {
        return $this->belongsTo(AwardsCategory::class, 'awards_category_id');
    }

    public function votes()
    {
        return $this->hasMany(Vote::class, 'artists_id')->orderBy('id', 'asc');
    }
}
