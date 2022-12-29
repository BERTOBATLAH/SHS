<?php

namespace App\Http\Controllers;

use App\Models\Blok;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        return Inertia::render('Blok/Index', [

        ]);
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
        $validated = $request->validate([
            'nama_blok' => 'required|string|max:255',
           
        ]);
 
        $request->user()->blok()->create($validated);
 
        return redirect(route('blok.index'));
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
