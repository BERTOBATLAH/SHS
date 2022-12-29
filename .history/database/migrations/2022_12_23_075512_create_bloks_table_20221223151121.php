<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bloks', function (Blueprint $table) {
            $table->increments('id_blok');
            $table->foreignId('id_kebun')->constrained()->cascadeOnDelete();
            $table->string('nama_produk')->unique();
            $table->string('merk')->nullable();
            $table->integer('harga_beli');
          
            $table->integer('harga_jual');
            $table->integer('stok');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bloks');
    }
};
