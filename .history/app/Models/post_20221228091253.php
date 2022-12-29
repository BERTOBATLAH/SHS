<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class post extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_kebun', 'nama', 'alamat'
    ];

    public function blok()
    {
        return $this->hasMany(Blok::class);
    }
}
