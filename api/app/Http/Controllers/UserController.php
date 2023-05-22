<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(User::get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        User::create([
           'name'=>$request->name,
           'email'=>$request->email,
           'password'=>$request->password
        ]);
        return response()->json('successfully created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return User::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::whereId($id);
        $user->update([
            'name'=>$request->name,
            'email'=>$request->email
        ]);
        return response()->json("success");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        User::whereId($id)->delete();

        return response()->json("success");
    }
}