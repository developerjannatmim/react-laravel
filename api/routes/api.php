<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::resource('users', UserController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});