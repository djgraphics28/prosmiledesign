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
    Route::get('/case-management', function () {
        return Inertia::render('case-management'); 
    })->name('case-management');

    Route::get('/clients/accounts', [ClientController::class, 'accounts'])->name('clients.accounts');
    Route::get('/clients/activity', [ClientController::class, 'activity'])->name('clients.activity');
    Route::get('/billing/adjustments', [BillingController::class, 'adjustments'])->name('billing.adjustments');
    Route::get('/billing/payments', [BillingController::class, 'payments'])->name('billing.payments');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
