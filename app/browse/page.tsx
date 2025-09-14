"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, ChevronDown, Play, Info, ChevronLeft, ChevronRight } from "lucide-react"
import { YouTubeVideo } from "@/components/YouTubeVideo"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const carouselRefs = {
    continueWatching: useRef<HTMLDivElement>(null),
    trending: useRef<HTMLDivElement>(null),
    popular: useRef<HTMLDivElement>(null),
    action: useRef<HTMLDivElement>(null),
    comedy: useRef<HTMLDivElement>(null),
    documentaries: useRef<HTMLDivElement>(null),
  }

  const scrollCarousel = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  // Anime images array
  const animeImages = [
    "https://res.cloudinary.com/dx9bvma03/image/upload/v1756020920/my-hero-academia-season-7_jbncmu.webp",
    "https://res.cloudinary.com/dx9bvma03/image/upload/v1756021182/jujutsu_rfa1o5.webp",
    "https://res.cloudinary.com/dx9bvma03/image/upload/v1756021305/black_bz0ctu.webp",
    "https://res.cloudinary.com/dx9bvma03/image/upload/v1756021692/demon-slayer-anime-to-the-swordsmith-village-05crqo0e0fzkql5q_beuolo.jpg",
    "https://res.cloudinary.com/dx9bvma03/image/upload/v1756022662/Chainsaw_Man_.Promo_Poster_m8kaol.png",
    "https://res.cloudinary.com/dx9bvma03/image/upload/v1756023592/death_iuio9j.avif",
    "https://res.cloudinary.com/dx9bvma03/image/upload/v1756022893/one-punch-man-road-to-hero-header_zqsgbx.avif",
    "https://res.cloudinary.com/dx9bvma03/image/upload/v1756023007/vinalndsaga_kemcaw.jpg",
    "https://res.cloudinary.com/dx9bvma03/image/upload/v1756023304/tokyo_fvrtxt.jpg"
  ];

  // Create array of anime shows with their titles
  const animeShows = animeImages.map((image, index) => ({
    id: index + 2,
    title: [
      "My Hero Academia",
      "Jujutsu Kaisen",
      "Black Clover",
      "Demon Slayer",
      "Chainsaw Man",
      "Death Note",
      "One Punch Man",
      "Vinland Saga",
      "Tokyo Revengers"
    ][index],
    image: image
  }));

  // Helper function to create placeholder movies
  const createPlaceholderMovies = (count: number, prefix = 'Movie') => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      title: `${prefix} ${i + 1}`,
      image: `/placeholder.svg?height=169&width=300&text=${prefix.replace(/\s+/g, '+')}+${i + 1}`
    }));
  };

  const categories = [
    { title: "Continue Watching", ref: carouselRefs.continueWatching, movies: createPlaceholderMovies(8, 'Continue') },
    { title: "Trending Now", ref: carouselRefs.trending, movies: createPlaceholderMovies(10, 'Trending') },
    { title: "Popular on Netflix", ref: carouselRefs.popular, movies: createPlaceholderMovies(10, 'Popular') },
    { title: "Action Movies", ref: carouselRefs.action, movies: createPlaceholderMovies(10, 'Action') },
    { title: "Comedy Shows", ref: carouselRefs.comedy, movies: createPlaceholderMovies(10, 'Comedy') },
    { 
      title: "Anime Picks", 
      ref: carouselRefs.documentaries, 
      movies: [
        { 
          id: 1, 
          title: "Life on Our Planet",
          image: "https://res.cloudinary.com/dx9bvma03/image/upload/v1756395058/Life-On-Our_Planet_Designed_Notes_v8_lr_1__page-0001_fgchly.avif"
        },
        ...animeShows
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-[#]/90 backdrop-blur-sm transition-all duration-300">
        <div className="flex items-center justify-between px-4 py-4 md:px-12">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <svg viewBox="0 0 111 30" className="h-6 w-auto fill-[#E50914] md:h-8" aria-hidden="true">
                <g>
                  <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                </g>
              </svg>
            </Link>
            <div className="hidden space-x-6 md:flex">
              <Link href="/browse" className="text-white hover:text-gray-300 font-medium">
                Home
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                TV Shows
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Movies
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                New & Popular
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Browse by Languages
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {showSearch ? (
                <div className="flex items-center bg-black border border-white">
                  <Search className="h-5 w-5 ml-3 text-white" />
                  <Input
                    type="text"
                    placeholder="Titles, people, genres"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 w-64"
                    autoFocus
                    onBlur={() => !searchQuery && setShowSearch(false)}
                  />
                </div>
              ) : (
                <Search className="h-5 w-5 cursor-pointer hover:text-gray-300" onClick={() => setShowSearch(true)} />
              )}
            </div>

            {/* Notifications */}
            <Bell className="h-5 w-5 cursor-pointer hover:text-gray-300" />

            {/* Profile */}
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="h-8 w-8 rounded overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dx9bvma03/image/upload/v1757856976/profile_fgs7bp.jpg" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="w-full h-full">
            <YouTubeVideo 
              videoId="dQw4w9WgXcQ" // Example YouTube video ID (Rick Astley - Never Gonna Give You Up)
              thumbnailUrl="/placeholder.svg?height=1080&width=1920&text=Featured+Movie"
              alt="Featured Movie Trailer"
              width={1920}
              height={1080}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 md:px-12">
          <div className="max-w-2xl pt-20">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">Wednesday</h1>
            <p className="mb-6 text-lg md:text-xl max-w-lg">
              When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
              supernatural forces, and one strange little girl.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-white text-black hover:bg-white/80 font-semibold px-8 py-3 text-lg">
                <Play className="mr-2 h-5 w-5 fill-current" />
                Play
              </Button>
              <Button
                variant="secondary"
                className="bg-gray-500/70 text-white hover:bg-gray-500/50 font-semibold px-8 py-3 text-lg"
              >
                <Info className="mr-2 h-5 w-5" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="relative z-20 -mt-32 space-y-12 pb-20">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="px-4 md:px-12">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">{category.title}</h2>
            <div className="group relative">
              <div
                ref={category.ref}
                className="flex space-x-2 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {category.movies.map((movie, movieIndex) => (
                  <div
                    key={movieIndex}
                    className="relative min-w-[200px] cursor-pointer transition-transform duration-300 hover:scale-105 md:min-w-[300px] flex-shrink-0"
                  >
                    <div className="relative aspect-video overflow-hidden rounded">
                      <Image
                        src={movie.image}
                        alt={movie.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollCarousel(category.ref, "left")}
                className="absolute -left-8 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/70 md:flex"
                aria-label="Scroll left"
                title="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => scrollCarousel(category.ref, "right")}
                className="absolute -right-8 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/70 md:flex"
                aria-label="Scroll right"
                title="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
