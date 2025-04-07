<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class BillingController extends Controller
{
    public function adjustments(Request $request)
    {
        return Inertia::render('billing/adjustments');
    }
}
