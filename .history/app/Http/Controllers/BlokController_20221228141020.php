<?php

namespace App\Http\Controllers;

use App\Models\Blok;
use App\Models\post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class BlokController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $blok = post::all();
        return Inertia::render('Blok/Index', compact('blok') );
       
            //
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
         return Inertia::render('Blok/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        Validator::make($request->all(), [
            'nama_kebun' => ['required'],
            'nama_blok' => ['required'],
        ])->validate();
   
        Blok::create($request->all());
    
        return redirect()->route('blok.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blok  $blok
     * @return \Illuminate\Http\Response
     */
    public function show(Blok $blok)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blok  $blok
     * @return \Illuminate\Http\Response
     */
    public function edit(Blok $blok)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blok  $blok
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blok $blok)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blok  $blok
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blok $blok)
    {
        //
    }
}
