'use client';

import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function TestLoginPage() {
  const router = useRouter();
  
  const handleSignIn = () => {
    // Simple redirect that should always work
    console.log('Redirecting to /profiles');
    router.push('/profiles');
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-75 relative">
      {/* Your original login page code */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-black/75 rounded-md px-16 py-12">
            <h1 className="text-white text-3xl font-medium mb-8">Test Sign In</h1>
            
            {/* Simplified form with just the button */}
            <Button 
              onClick={handleSignIn}
              className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-sm mt-8"
            >
              Sign In (Test)
            </Button>
            
            <div className="mt-16 text-gray-400">
              <p className="text-base">
                <Link href="/login" className="text-white hover:underline">
                  Back to original login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
