"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Bell, ChevronDown, Play, Info, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

// Helper function to get image src for each card
function getMovieImageSrc(categoryIndex: number, movieIndex: number) {
  // Blockbuster Movies
  if (categoryIndex === 0) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756018384/The-Electric-State_l1sg3s.webp";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756017706/demon_city_ina9uh.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757247818/Brick-2025-Netflix-Thriller_ovb6xi.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757247916/happy_gilmore_cklsae.webp";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536232/kpop_vls2vq.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757248199/back_in_action_v0vsgh.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756019969/hitman_sbfj7d.webp";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755879466/in_love_all_gabect.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755533355/my_oxford_yearr_cloudinary_m5wvzj.webp";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757248477/officer_black_belt_mi19vk.jpg";
  }
  // New Releases
  if (categoryIndex === 1) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757248696/mission_-impossible-rogue-nation-wallpapers-29745-4347337_dkrfh4.jpg";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757248785/gray_main_rc1bro.webp";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757248844/enolaholmes-poster_bqsxsv.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755879466/in_love_all_gabect.jpg";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757249271/leo_hifi3p.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757249113/heart_of_stone_y4vd7k.webp";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756017706/demon_city_ina9uh.jpg";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756018738/deva_lqud87.webp";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756544829/kung_fu_panda_zpsmlr.webp";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756019602/makehp_p6txc7.webp";
  }
  // Top 10 Movies
  if (categoryIndex === 2) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536232/kpop_vls2vq.jpg";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757265168/thursday_murder_emtqid.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757265405/art_if_racing_lzoren.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757265510/home_guovnq.jpg";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755690963/Kathal_1-1_f4f1wa.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757265656/unknown_m9yzda.webp";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756018738/deva_lqud87.webp";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755879293/Bridgerton-Netflix_ptdfbd.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755879466/in_love_all_gabect.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757247818/Brick-2025-Netflix-Thriller_ovb6xi.jpg";
  }
  // Fantasy and Adventure
  if (categoryIndex === 3) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757249599/jumanji_flkelc.jpg";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757254773/troll_n7xs7z.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757251665/slumberland_plylhy.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757254465/the_school_ixem07.webp";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757249723/great_wall_muxaz5.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757254789/dolittle_dgvlof.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756018384/The-Electric-State_l1sg3s.webp";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757255146/stardust_pxryoi.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757255258/okja_pggkfy.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757255435/rebel_moon_ut1b3u.webp";
  }
  // Comedies
  if (categoryIndex === 4) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757255598/dragon_ik4jtz.avif";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757255747/me_time_eg7ue3.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757254340/red-notice-2021_a3lqhc.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757255892/veerey_di_wedding_fdmxei.jpg";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757255957/murali_d7eylp.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757256003/naked_gun_waaqws.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757256125/american_otmtao.jpg";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757256067/mai_hoon_na_luzwog.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757256169/shehzada_jdem8a.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757256215/happy_new_yaer_gw3h1p.jpg";
  }

// new on netflix
  if (categoryIndex === 5) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757264252/fall_guy_xzcqgi.jpg";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757264265/lovesick_tyz7la.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757264308/amsterdam_knkcc6.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757264363/problem_a1dv5o.jpg";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536232/kpop_vls2vq.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757264542/aapjaisa_fe2cfn.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757264626/my_oxford_best_ikvdnn.jpg";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757264849/oho_lxpw9s.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757256169/shehzada_jdem8a.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757247916/happy_gilmore_cklsae.webp";
  }
  
  // Blockbuster

  if (categoryIndex === 6) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757266066/animal_xrqles.jpg";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757266182/kalki_lpztks.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757266240/spider_man_peoqpw.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757266302/salaar_h9ggha.jpg";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536232/kpop_vls2vq.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757266378/leoo_webvlm.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757248785/gray_main_rc1bro.webp";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757248696/mission_-impossible-rogue-nation-wallpapers-29745-4347337_dkrfh4.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755696152/train_v0rwss.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757254340/red-notice-2021_a3lqhc.jpg";
  }

  // Telugu Movies

  if (categoryIndex === 7) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757310660/guntut_tikfeq.jpg";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757310331/lucky_bhaskar_wvbitq.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757311343/kushi_k3o2fn.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757266302/salaar_h9ggha.jpg";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757310477/surya_hasrt9.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757310528/vasant_coi4ol.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755690604/Thammudu_gurtag.jpg";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757310206/hit_new_yghcy9.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757311107/shetty_cozelx.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757311223/tillu_ijwrmb.jpg";
  }

  // Award winning Movies

  if (categoryIndex === 8) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757599174/rrr_guujge.jpg";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757599252/old_guard_fr7jy7.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757599328/pride_a4uopn.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757599437/kabhi_khushi_hxp9d9.jpg";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757599464/bajrangi_gtvsha.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757599512/gangubai_vvtaay.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757599556/pk_blilpe.jpg";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757599618/mimi_ahovxr.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757599657/hunger_fqazv1.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757599707/unbroken_zigm8u.jpg";
  }
  return "https://via.placeholder.com/300x169?text=Movie"
}

interface Category {
  title: string
  movies: null[]
  showNumbers?: boolean
}

export default function MoviesPage() {
  const ytPlayerRef = useRef<any>(null);
  const ytContainerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const categories: Category[] = [
    { title: "Only on Netflix", movies: Array(10).fill(null) },
    { title: "The Art of Espionage", movies: Array(10).fill(null) },
    { title: "Top 10 on Netflix today", movies: Array(10).fill(null), showNumbers: true },
    { title: "Fantasy and Adventure", movies: Array(10).fill(null) },
    { title: "Comedies", movies: Array(10).fill(null) },
    { title: "New on Netflix", movies: Array(10).fill(null) },
    { title: "Blockbuster", movies: Array(10).fill(null) },
    { title: "Telugu Movies", movies: Array(10).fill(null) },
    {title: "Award winning Movies", movies: Array(10).fill(null)}
  ]

  const handleHeroEnter = () => {
    setIsHovered(true)
    // Start playing the video when hovering
    if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === 'function') {
      ytPlayerRef.current.playVideo();
    }
  }

  const handleHeroLeave = () => {
    setIsHovered(false)
    // Pause the video when not hovering
    if (ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === 'function') {
      ytPlayerRef.current.pauseVideo();
    }
  }

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
          event.target.loadVideoById("EKQPCiUSRAo");
          // Don't auto-play, just ensure it's unmuted by default
          event.target.unMute();
          event.target.setVolume(100);
        };

        ytPlayerRef.current = new YT.Player(ytContainerRef.current, {
          videoId: "EKQPCiUSRAo",
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
            playlist: "EKQPCiUSRAo",
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
      <nav className="fixed top-0 z-50 w-full bg-[#141414] transition-all duration-300">
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
              <Link href="/tv-shows" className="text-gray-300 hover:text-white">
                TV Shows
              </Link>
              <Link href="/movies" className="text-white font-semibold hover:text-gray-300">
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 top-[0.5cm]">
            <Image
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1757095721/MV5BZmQ5N2I0ZDctNTQ5Mi00ZTFjLTk1NGMtZGVlYjdmN2MzMmNiXkEyXkFqcGc._V1__zoeyha.jpg"
              alt="MY Oxford Year"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            ref={ytContainerRef}
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none overflow-hidden yt-overlay -top-[1cm] scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1.5cm] bg-gradient-to-t from-black/80 to-transparent" />
        </div>


        <div className="relative z-10 flex h-full items-center px-4 md:px-12">
          <div className="max-w-2xl pt-28 md:pt-40 lg:pt-48 -mt-[1.5cm] ml-[0.5cm]">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">My Oxford Year</h1>
            <p className="mb-6 text-lg md:text-xl">
            An ambitious American fulfilling her dream of studying at Oxford falls for a charming Brit hiding a secret that may upend her perfectly planned life.
            </p>
            <div className="flex space-x-4">
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
                {category.movies.map((_, movieIndex) => (
                  <div
                    key={movieIndex}
                    className={`relative min-w-[200px] cursor-pointer md:min-w-[300px] group transition-transform duration-300 hover:scale-105${movieIndex === 0 ? ' ml-6 md:ml-12' : ''}`}
                  >
                    {category.showNumbers && movieIndex < 10 && (
                      <div className={`absolute -left-4 top-0 z-10 text-6xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-8xl stroke-1 stroke-black [-webkit-text-stroke:1px_black]`}>
                        {movieIndex + 1}
                      </div>
                    )}
                    <div className="relative aspect-video overflow-hidden rounded">
                      <Image
                        src={getMovieImageSrc(categoryIndex, movieIndex)}
                        alt={`Movie ${movieIndex + 1}`}
                        fill
                        className="object-cover"
                        priority={movieIndex < 3}
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
