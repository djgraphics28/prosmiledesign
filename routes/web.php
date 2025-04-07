<?php

use App\Http\Controllers\BillingController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/clients/accounts', [ClientController::class, 'accounts'])->name('clients.accounts');
    Route::get('/clients/activity', [ClientController::class, 'activity'])->name('clients.activity');
    Route::get('/billing/adjustments', [BillingController::class, 'adjustments'])->name('billing.adjustments');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
