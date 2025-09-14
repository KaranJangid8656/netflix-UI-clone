"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, Plus, X, ChevronLeft } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"
import TrendingShows from "@/components/TrendingShows"

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -280, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 280, behavior: "smooth" })
    }
  }

  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and documentaries on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.jpg"
            alt="Netflix Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
        </div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-14">
          <div className="flex items-center" style={{ marginLeft: '2.5cm' }}>
            <svg viewBox="0 0 111 30" className="h-6 w-auto fill-[#e50914] md:h-10" aria-hidden="true">
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </div>
          <div className="flex items-center" style={{ marginLeft: '2.5cm' }}>
            <Link href="/login" passHref legacyBehavior>
  <Button
    className="h-8 bg-[#e50914] hover:bg-[#f40612] text-white font-medium px-4 py-2 rounded"
    style={{ marginLeft: '-4.5cm' }}
  >
    Sign In
  </Button>
</Link>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[calc(100vh-120px)] items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl font-black md:text-5xl lg:text-6xl">Unlimited movies, TV shows and more</h1>
            <p className="mb-6 text-lg font-normal md:text-xl lg:text-2xl">Start now. Cancel anytime.</p>
            <p className="mb-8 text-base font-normal md:text-lg">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="flex justify-center">
              <Link href="/login">
                <Button className="h-14 bg-[#e50914] hover:bg-[#f40612] text-white font-medium text-lg px-6 sm:px-8 whitespace-nowrap w-full sm:w-auto">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Curved Bottom with Red to Pink Gradient */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="-1000 0 3000 120" className="w-full h-20 md:h-24">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a1a2e" />
                <stop offset="20%" stopColor="#e50914" />
                <stop offset="50%" stopColor="#ff1744" />
                <stop offset="80%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#1a1a2e" />
              </linearGradient>
            </defs>
            <path d="M-1000,120 L-1000,90 Q600,0 2000,90 L2000,120 Z" fill="black" />
            <path d="M-1000,90 Q600,0 2000,90" stroke="url(#curveGradient)" strokeWidth="4" fill="none" />
          </svg>
          {/* Glow effect below the red line */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[60vw] h-12 md:h-16" style={{bottom: '-8px'}}>
            <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-[#101624]/80 to-transparent blur-2xl opacity-90" />
          </div>
        </div>
      </div>

      {/* Trending Shows Section */}
      <TrendingShows />

      {/* More Reasons to Join */}
      <div className="bg-black py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="mb-6 text-xl md:text-2xl lg:text-3xl font-normal text-white ml-2">More reasons to join</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 - Enjoy on your TV */}
            <div className="bg-[#181818] p-8 rounded-2xl relative overflow-hidden h-60">
              <div className="mt-6">
                <h3 className="mb-5 text-lg font-bold text-white">
                  <span className="text-white">Enjoy</span> on your TV
                </h3>
                <p className="text-white/90 text-sm mb-3">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                </p>
              </div>
              <div className="absolute bottom-3 right-3">
                <svg viewBox="0 0 111 30" className="h-3 w-auto fill-[#e50914]" aria-hidden="true">
                  <g>
                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                  </g>
                </svg>
              </div>
            </div>

            {/* Card 2 - Download shows */}
            <div className="bg-[#181818] p-8 rounded-2xl relative overflow-hidden h-60">
              <div className="mt-6">
                <h3 className="mb-5 text-lg font-bold text-white">
                  <span className="text-white">Download</span> your shows to watch offline
                </h3>
                <p className="text-white/90 text-sm mb-3">
                  Save your favourites easily and always have something to watch.
                </p>
              </div>
              <div className="absolute bottom-3 right-3">
                <svg viewBox="0 0 111 30" className="h-3 w-auto fill-[#e50914]" aria-hidden="true">
                  <g>
                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                  </g>
                </svg>
              </div>
            </div>

            {/* Card 3 - Watch everywhere */}
            <div className="bg-[#181818] p-8 rounded-2xl relative overflow-hidden h-60">
              <div className="mt-6">
                <h3 className="mb-5 text-lg font-bold text-white">
                  <span className="text-white">Watch</span> everywhere
                </h3>
                <p className="text-white/90 text-sm mb-3">
                  Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.
                </p>
              </div>
              <div className="absolute bottom-3 right-3">
                <svg viewBox="0 0 111 30" className="h-3 w-auto fill-[#e50914]" aria-hidden="true">
                  <g>
                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                  </g>
                </svg>
              </div>
            </div>

            {/* Card 4 - Kids profiles */}
            <div className="bg-[#181818] p-8 rounded-2xl relative overflow-hidden h-60">
              <div className="mt-6">
                <h3 className="mb-5 text-lg font-bold text-white">
                  <span className="text-white">Create</span> profiles for kids
                </h3>
                <p className="text-white/90 text-sm mb-3">
                  Send kids on adventures with their favourite characters in a space made just for them — free with your
                  membership.
                </p>
              </div>
              <div className="absolute bottom-3 right-3">
                <svg viewBox="0 0 111 30" className="h-3 w-auto fill-[#e50914]" aria-hidden="true">
                  <g>
                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="border-t-8 border-gray-800 bg-black py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <h2 className="mb-8 text-center text-3xl font-black md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800">
                <button
                  className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-700 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-normal md:text-xl lg:text-2xl pr-8">{faq.question}</h3>
                  {openFaq === index ? (
                    <X className="h-6 w-6 flex-shrink-0" />
                  ) : (
                    <Plus className="h-6 w-6 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="border-t border-black px-6 pb-6">
                    <p className="pt-6 text-lg font-normal md:text-xl lg:text-2xl leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-base font-normal md:text-lg">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="flex justify-center">
              <Link href="/login">
                <Button className="h-14 bg-[#e50914] hover:bg-[#f40612] text-white font-medium text-lg px-6 sm:px-8 whitespace-nowrap w-full sm:w-auto">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-8 border-gray-800 bg-black py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <p className="mb-8 text-gray-400">Netflix Clone Developed By <span className="font-bold">Karan Suthar</span> | <a href="https://github.com/KaranJangid8656" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-200">GitHub</a> | <a href="https://www.linkedin.com/in/karansuthar9565/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-200">LinkedIn</a></p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm text-gray-400 md:grid-cols-4 lg:gap-x-8">
            <div className="space-y-4">
              <Link href="#" className="block underline hover:no-underline">
                FAQ
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Investor Relations
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Privacy
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Speed Test
              </Link>
            </div>
            <div className="space-y-4">
              <Link href="#" className="block underline hover:no-underline">
                Help Centre
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Jobs
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Cookie Preferences
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Legal Notices
              </Link>
            </div>
            <div className="space-y-4">
              <Link href="#" className="block underline hover:no-underline">
                Account
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Ways to Watch
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Corporate Information
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Only on Netflix
              </Link>
            </div>
            <div className="space-y-4">
              <Link href="#" className="block underline hover:no-underline">
                Media Centre
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Terms of Use
              </Link>
              <Link href="#" className="block underline hover:no-underline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <div className="relative inline-block">
              <select className="appearance-none bg-black border border-gray-500 text-gray-400 px-4 py-2 pr-8 rounded">
                <option>🌐 English</option>
                <option>🌐 हिन्दी</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <p className="mt-6 text-gray-400">Netflix Clone developed by Karan Suthar</p>
        </div>
      </footer>
    </div>
  )
}
