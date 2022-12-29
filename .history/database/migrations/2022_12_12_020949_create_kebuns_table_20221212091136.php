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
        Schema::create('kebuns', function (Blueprint $table) {
            $table->id();
            $table->increments('Id_kebun');
            $table->string('Nama');
            $table->string('Alamat');
            $table->string('Id_ERP');
            $table->string('No_telp');
            $table->string('No_rekening');
            $table->string('Bank');
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
        Schema::dropIfExists('kebuns');
    }
};
