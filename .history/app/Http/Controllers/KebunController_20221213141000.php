<?php

namespace App\Http\Controllers;

use App\Models\Kebun;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KebunController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('Kebun/Index', ['kebuns' => Kebun::with('user:id,name,alamat')->latest()->get(),]);
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
            'nama' => 'required|string|max:255',
            'alamat' => 'required|string|max:255',
        ]);
 
        $request->user()->chirps()->create($validated);
 
        return redirect(route('kebun.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kebun  $kebun
     * @return \Illuminate\Http\Response
     */
    public function show(Kebun $kebun)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kebun  $kebun
     * @return \Illuminate\Http\Response
     */
    public function edit(Kebun $kebun)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kebun  $kebun
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kebun $kebun)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kebun  $kebun
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kebun $kebun)
    {
        //
    }
}
