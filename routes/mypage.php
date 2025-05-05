<?php

use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

    Route::get('/contact', [ProfileController::class, 'edit'])->name('profile.edit');
