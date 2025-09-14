"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

import { useRouter } from "next/navigation";

export default function NetflixLogin() {
  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Here you could add authentication logic
    router.push("/home");
  }
  return (
    <div className="min-h-screen relative">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"
        style={{
          backgroundImage: `url('/newbanner.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      {/* Header with Netflix logo */}
      <header className="relative z-10 px-4 py-6 md:px-12">
        <div className="flex items-center">
          <svg className="h-8 w-auto text-red-600 fill-current" viewBox="0 0 111 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" />
          </svg>
        </div>
      </header>

      {/* Main login form */}
      <main className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-black/75 rounded-md px-16 py-12">
            <h1 className="text-white text-3xl font-medium mb-8">Sign In</h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <Input
                  type="email"
                  placeholder="Email or mobile number"
                  className="h-14 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 rounded-sm focus:bg-gray-600 focus:border-white"
                />
              </div>

              <div className="space-y-1">
                <Input
                  type="password"
                  placeholder="Password"
                  className="h-14 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 rounded-sm focus:bg-gray-600 focus:border-white"
                />
              </div>

              <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-sm mt-8">
                Sign In
              </Button>

              <div className="flex items-center justify-between text-sm mt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    className="h-4 w-4 rounded border-2 border-gray-400 
                    data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 
                    transition-all duration-300 ease-in-out
                    hover:border-gray-200 
                    focus:ring-2 focus:ring-red-500/30 focus:border-red-500
                    cursor-pointer"
                  />
                  <Label 
                    htmlFor="remember" 
                    className="text-gray-300 text-sm cursor-pointer select-none
                    transition-colors duration-300 ease-in-out
                    hover:text-white group-hover:text-white"
                  >
                    Remember me
                  </Label>
                </div>
                <Link href="/help" className="text-gray-300 hover:underline">
                  
                </Link>
              </div>
            </form>

            <div className="mt-16 text-gray-400">
              <p className="text-base">
                New to Netflix?{" "}
                <Link href="/signup" className="text-white hover:underline">
                  Sign up now
                </Link>
                .
              </p>
              <p className="text-xs mt-3 leading-relaxed">
                This page does not require any authorization.Click on sign in to continue{" "}
                <Link href="/recaptcha" className="text-blue-500 hover:underline">
                  Learn more.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black px-4 py-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-6">
            
            <Link href="" className="hover:underline">
              
            </Link>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
            <div className="space-y-3">
              <Link href="/faq" className="block hover:underline">
                FAQ
              </Link>
              <Link href="/cookie-preferences" className="block hover:underline">
                Cookie Preferences
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="/help" className="block hover:underline">
                Help Centre
              </Link>
              <Link href="/corporate-information" className="block hover:underline">
                Corporate Information
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="/terms" className="block hover:underline">
                Terms of Use
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="/privacy" className="block hover:underline">
                Privacy
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <select className="bg-black border border-gray-600 text-gray-400 px-4 py-2 rounded-sm">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  )
}
