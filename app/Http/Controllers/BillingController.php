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
    public function payments(Request $request)
    {
        return Inertia::render('billing/payments');
    }

    public function statements(Request $request)
    {
        return Inertia::render('billing/statements');
    }

    public function accountSummary(Request $request)
    {
        return Inertia::render('billing/account-summary');
    }

    public function exportData(Request $request)
    {
        return Inertia::render('billing/export-data');
    }
}
