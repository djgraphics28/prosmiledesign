<?php

namespace Database\Seeders;

use App\Models\User;
use Pest\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SuperadminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Superadmin',
            'email' => 'superadmin@psd.com',
            'email_verified_at' => now(),
            'password' =>  Hash::make('123123123'),
            'remember_token' => Str::random(10),
        ]);
    }
}
