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
            $table->unsignedBigInteger('id_kebun');
            $table->foreignId('id_kebun')->constrained('kebuns');
            $table->string('nama_blok')->unique();
            $table->foreign('user_id')->references('id')->on('users');
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
