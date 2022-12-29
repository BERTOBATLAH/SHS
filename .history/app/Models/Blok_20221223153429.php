<?php

namespace App\Models;

use App\Http\Controllers\KebunController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blok extends Model
{
    use HasFactory;

    public function blok ()
    {
        return $this->belongsToMany(Kebun::class, 'kebuns');
    }
}
