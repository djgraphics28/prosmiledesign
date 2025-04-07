<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function accounts(Request $request)
    {
        return Inertia::render('clients/accounts');
    }

    public function activity(Request $request)
    {
        return Inertia::render('clients/activity');
    }
}
