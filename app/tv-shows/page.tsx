"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Bell, ChevronDown, Play, Info, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
 
// Helper function to get image src for each card
function getTvShowImageSrc(categoryIndex: number, showIndex: number) {
  // Popular TV Shows
  if (categoryIndex === 0) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757606386/sg_undjbz.jpg";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756487192/Adolescence-Netflix-series-review_pdbrnq.jpg";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755694517/crash_ao1gsq.jpg";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755623927/dexter_hzooc6.webp";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755696871/love_next_door_kut2eo.webp";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756021692/demon-slayer-anime-to-the-swordsmith-village-05crqo0e0fzkql5q_beuolo.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757610932/money_xjq35z.jpg";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757610985/stranger_things_yobdbq.jpg";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755697522/weak_hero_wyobco.webp";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611076/breaking_bad_ichl0n.jpg";
  }
  // Romantic
  if (categoryIndex === 1) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611255/the_royals_rkxwo2.jpg";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611306/my_demon_ieawvp.jpg";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755694705/business_vkepsq.jpg";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611414/ginny_and_georgia_uwsltn.jpg";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611465/true_beauty_k81kk4.jpg";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611528/mismatched_zuylmo.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611572/alchemy_mozcvk.jpg";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611613/blue_box_sajpai.jpg";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611691/descen_nrbn5m.jpg";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611733/hierachy_psyxaf.jpg";
  }
  // US TV Shows
  if (categoryIndex === 2) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756397287/linc_jnnnod.webp";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757612202/lock_d9yrhe.jpg";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611956/you_kbo89r.jpg";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757680889/xo_i78jea.jpg";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757681008/gilmore_qudla1.jpg";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757612243/ozark_mzwvji.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611076/breaking_bad_ichl0n.jpg";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611916/narcos_qt4pni.jpg";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611956/you_kbo89r.jpg";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611414/ginny_and_georgia_uwsltn.jpg";
  }
  // Bingeworthy TV Shows
  if (categoryIndex === 3) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611929/alice_nbtqnx.jpg";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611956/you_kbo89r.jpg";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756397347/sandman_lfewen.jpg";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611916/narcos_qt4pni.jpg";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757612202/lock_d9yrhe.jpg";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757612270/better_czch2q.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757612243/ozark_mzwvji.jpg";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757612228/darkkkkk_ezm4td.jpg";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757606386/sg_undjbz.jpg";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756397512/Night_Agent_1731579678025_gxxfg5.webp";
  }
  // Korean
  if (categoryIndex === 4) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611572/alchemy_mozcvk.jpg";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757612685/extra_rh4zwe.jpg";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755695275/All-Of-Us-Are-Dead-on-Netflix-1_haoxvy.jpg";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755694517/crash_ao1gsq.jpg";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755623256/wlife_xxfg94.webp";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757612845/mr_plankton_avqxvh.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756487522/mercy_nfbihv.webp";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757612953/boys_odf87p.jpg";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757613020/the_legend_tif9yd.jpg";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757613068/uncanny_ch6jvu.jpg";
  }

  // Hindi TV Shows
  if (categoryIndex === 5) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757613317/kapil_bdtil4.jpg";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755534729/mandala_m_efgvdi.jpg";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757611255/the_royals_rkxwo2.jpg";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757613494/sacred_raexzx.jpg";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757613370/rana_naidu_shpfvw.jpg";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757613537/kota_zf1vzz.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757613620/cid_wgzcis.avif";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757613607/kahkeee_eafeer.jpg";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757613708/delhi_rf2scw.jpg";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757613768/little_things_ekcgee.jpg";
  }

  // Anime Shows
  if (categoryIndex === 6) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756023007/vinalndsaga_kemcaw.jpg";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756021692/demon-slayer-anime-to-the-swordsmith-village-05crqo0e0fzkql5q_beuolo.jpg";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756021305/black_bz0ctu.webp";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756020920/my-hero-academia-season-7_jbncmu.webp";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757678432/the_eeyqw1.jpg";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756023484/ship_c9eyef.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757678009/bleach_l28zu3.jpg";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756021182/jujutsu_rfa1o5.webp";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756022893/one-punch-man-road-to-hero-header_zqsgbx.avif";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756023592/death_iuio9j.avif";
  }

  return "https://via.placeholder.com/300x169?text=TV+Show"
}

interface Category {
  title: string
  shows: null[]
  showNumbers?: boolean
}

export default function TvShowsPage() {
  const ytPlayerRef = useRef<any>(null);
  const ytContainerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const categories: Category[] = [
    { title: "Popular on Netflix", shows: Array(10).fill(null) },
    { title: "Romantic TV Shows", shows: Array(10).fill(null) },
    { title: "US TV Shows", shows: Array(10).fill(null)},
    { title: "Bingeworthy TV Shows", shows: Array(10).fill(null) },
    { title: "Korean", shows: Array(10).fill(null) },
    { title: "Hindi TV Shows", shows: Array(10).fill(null) },
    { title: "Anime Shows", shows: Array(10).fill(null) },
   
  ]

  const handleHeroEnter = () => {
    setIsHovered(true);
    // Start playing the video when hovering
    if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === 'function') {
      ytPlayerRef.current.playVideo();
    }
  };

  const handleHeroLeave = () => {
    setIsHovered(false);
    // Pause the video when not hovering
    if (ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === 'function') {
      ytPlayerRef.current.pauseVideo();
    }
  };

  const handleToggleMute = () => {
    if (isMuted) {
      // First ensure the video is playing
      ytPlayerRef.current?.playVideo?.();
      // Then unmute and set volume
      ytPlayerRef.current?.unMute?.();
      ytPlayerRef.current?.setVolume?.(100);
      setIsMuted(false);
    } else {
      ytPlayerRef.current?.mute?.();
      setIsMuted(true);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const createPlayer = () => {
      try {
        const YT = (window as any).YT;
        if (!YT || !ytContainerRef.current) return;
        
        // Create a function to handle the player's ready event
        const onPlayerReady = (event: any) => {
          // Preload the video for faster playback
          event.target.loadVideoById("iKZyYdwS3Wg");
          // Don't auto-play, just ensure it's unmuted by default
          event.target.unMute();
          event.target.setVolume(100);
        };

        ytPlayerRef.current = new YT.Player(ytContainerRef.current, {
          videoId: "iKZyYdwS3Wg",
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            mute: 1,
            fs: 0,
            cc_load_policy: 0,
            iv_load_policy: 3,
            showinfo: 0,
            disablekb: 1,
            enablejsapi: 1,
            origin: window.location.origin,
            loop: 1,
            playlist: "iKZyYdwS3Wg",
            preload: "auto",
            start: 0,
            wmode: "opaque",
            widgetid: 1,
            autohide: 2,
            showsearch: 0
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: (event: any) => {
              // If video ends, replay it
              if (event.data === YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            }
          }
        });
      } catch (error) {
        console.error("Error creating YouTube player:", error);
      }
    };

    const loadYouTubeAPI = () => {
      if (!(window as any).YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        (window as any).onYouTubeIframeAPIReady = createPlayer;
      } else {
        createPlayer();
      }
    };

    if (isMounted) {
      loadYouTubeAPI();
    }

    return () => {
      isMounted = false;
      if (ytPlayerRef.current) {
        ytPlayerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-[#141414] backdrop-blur transition-all duration-300">
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
              <Link href="/home" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/tv-shows" className="text-white font-semibold hover:text-gray-300">
                TV Shows
              </Link>
              <Link href="/movies" className="text-gray-300 hover:text-white">
                Movies
              </Link>
              <Link href="/new-and-popular" className="text-gray-300 hover:text-white">
                New & Popular
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 cursor-pointer hover:text-gray-300" />
            <Bell className="h-5 w-5 cursor-pointer hover:text-gray-300" />
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="h-8 w-8 rounded bg-[#E50914]"></div>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-screen group mt-[1.2cm]" onMouseEnter={handleHeroEnter} onMouseLeave={handleHeroLeave}>
        {/* YouTube Player Container - Hidden but interactive */}
        <div className="absolute inset-0 -top-[0.5cm]">
          <div
            ref={ytContainerRef}
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none overflow-hidden yt-cover scale-[1.02]"
          />
        </div>
        
        {/* Fallback Image */}
        <div className={`absolute inset-0 -top-[2.5cm] transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <Image
            src="/stranger-things-3840x2160-23262.jpg"
            alt="Stranger Things"
            fill
            className="object-cover object-center"
            priority
          />
          {/* No overlay effects */}
        </div>

        <div className="relative z-10 flex h-full items-center px-4 md:px-12">
          <div className="max-w-2xl pt-28 md:pt-40 lg:pt-48 -mt-[1.5cm]">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">Stranger Things </h1>
            <p className="mb-6 text-lg md:text-xl">
            Stranger Things Season 5 is the epic final season, where the group must unite to find and kill Vecna after the Rifts open and the Upside Down begins merging with Hawkins
            </p>
            <div className="flex items-center space-x-4">
              <Button className="bg-white text-black hover:bg-white/80 font-semibold px-8 py-3">
                <Play className="mr-2 h-5 w-5 fill-current" />
                Play
              </Button>
              <Button
                variant="secondary"
                className="bg-gray-500/70 text-white hover:bg-gray-500/50 font-semibold px-8 py-3"
              >
                <Info className="mr-2 h-5 w-5" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="relative z-20 -mt-[calc(8rem+1cm)] space-y-12 pb-20">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="px-4 md:px-12">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">{category.title}</h2>
            <div className="group relative">
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
                {category.shows.map((_, showIndex) => (
                  <div
                    key={showIndex}
                    className={`relative min-w-[200px] cursor-pointer md:min-w-[300px] group transition-transform duration-300 hover:scale-105${showIndex === 0 ? ' ml-6 md:ml-12' : ''}`}
                  >
                    {category.showNumbers && showIndex < 10 && (
                      <div className={`absolute -left-4 top-0 z-10 text-6xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-8xl stroke-1 stroke-black [-webkit-text-stroke:1px_black]`}>
                        {showIndex + 1}
                      </div>
                    )}
                    <div className="relative aspect-video overflow-hidden rounded">
                      <Image
                        src={getTvShowImageSrc(categoryIndex, showIndex)}
                        alt={`TV Show ${showIndex + 1}`}
                        fill
                        className="object-cover"
                        priority={showIndex < 3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
