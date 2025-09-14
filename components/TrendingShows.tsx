'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

const trendingShows = [
  { id: 1, title: 'Stranger Things', image: '/stranger.jpg', category: 'TV Show' },
  { id: 2, title: 'Dark', image: '/darkk.jpg', category: 'TV Show' },
  { id: 3, title: 'Raid', image: '/raid%202.jpg', category: 'Movie' },
  { id: 4, title: 'Squid Game 3', image: '/squid%20game%203.jpg', category: 'TV Show' },
  { id: 5, title: 'The great Indian Kapil Sharma show', image: '/gikss.jpg', category: 'TV Show' },
  { id: 6, title: 'Hit 3', image: '/hit3.jpg', category: 'Movie' },
  { id: 7, title: 'Narcos', image: '/the-royals.jpg', category: 'TV Show' },
  { id: 8, title: 'Dark', image: '/retro.jpg', category: 'TV Show' },
  { id: 9, title: 'Ozark', image: '/the-witcher.jpg', category: 'TV Show' },
  { id: 10, title: 'The Sandman', image: '/wednesday.jpg', category: 'TV Show' },
]

export default function TrendingShows() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -1300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 1300, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-black pt-4 pb-0 px-4 md:px-12 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-xl md:text-2xl lg:text-3xl font-normal text-white ml-2">
          Trending shows
        </h2>
        
        <div className="relative">
          
          <button
            onClick={scrollLeft}
            className="absolute top-[90px] md:top-[115px] lg:top-[125px] z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/80 text-white hover:bg-[#e50914] transition-all shadow-lg"
            aria-label="Scroll left"
            style={{ left: '-3cm' }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <div
            ref={carouselRef}
            className="no-scrollbar flex space-x-16 overflow-x-auto scroll-smooth py-4 pr-8 min-h-[16rem] md:min-h-[22rem] lg:min-h-[26rem]"
          >
            {trendingShows.map((show, index) => (
              <div
                key={show.id}
                className={`group relative flex-shrink-0 cursor-pointer h-[180px] md:h-[230px] lg:h-[250px] flex items-stretch` }
              >
                <div className="transition-transform duration-300 group-hover:scale-105 h-full w-full flex">
  <div className="relative w-40 md:w-42 lg:w-30 h-full overflow-hidden rounded-md">
    <Image
      src={show.image}
      alt=""
      fill={true}
      className="object-cover transition-transform duration-300 rounded-md"
    />
    <div className="absolute top-[65%] -left-1 z-20 flex h-full w-24 -translate-y-1/2 items-center justify-start pl-4 select-none pointer-events-none">
      <span
        className="text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] font-extrabold text-black"
        style={{
          fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif',
          WebkitTextStroke: '1.5px #fff',
          textShadow: '0 1px 4px #000',
          lineHeight: 1
        }}
      >
        {index + 1}
      </span>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-60 rounded-md" />
  </div>
</div>
              </div>
            ))}
          </div>
          
          <button
            onClick={scrollRight}
            className="absolute top-[90px] md:top-[115px] lg:top-[125px] z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/80 text-white hover:bg-[#e50914] transition-all shadow-lg"
            aria-label="Scroll right"
            style={{ right: '-3cm' }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
        </div>
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
