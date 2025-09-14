"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Bell, ChevronDown, Play, Info, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

// Helper function to get image src for each card
function getCardImageSrc(categoryIndex: number, movieIndex: number) {
  // New Releases
  if (categoryIndex === 0) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755535245/aib_clodify_cgbf3b.webp";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756017706/demon_city_ina9uh.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756018384/The-Electric-State_l1sg3s.webp";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756018738/deva_lqud87.webp";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757606386/sg_undjbz.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756019216/sijkandar_qkbodl.avif";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756019602/makehp_p6txc7.webp";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756019969/hitman_sbfj7d.webp";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756020267/theamateur_pqbtsc.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755880302/saiyaara_pxoh7r.avif";
  }
  // Trending Now
  if (categoryIndex === 1) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757841280/wed_vrnr0g.jpg";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757264626/my_oxford_best_ikvdnn.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755534729/mandala_m_efgvdi.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755535245/aib_clodify_cgbf3b.webp";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536232/kpop_vls2vq.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536779/one_piece_zionu0.webp";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536956/Chhaava-m2-1_xbuund.jpg";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755537148/kung-fu-panda-4-2560x1440-15545_owz398.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755537370/p30807518_b_h10_ad_iscxnl.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755537500/jaat-ott_ibq8bj.webp";
  }
  // Popular on Netflix
  if (categoryIndex === 2) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755622749/bb_mjeuhv.webp";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755623927/dexter_hzooc6.webp";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755622997/friends_trd4j8.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755623256/wlife_xxfg94.webp";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757266302/salaar_h9ggha.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536956/Chhaava-m2-1_xbuund.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755534440/gikss_cloudify_ypnccd.jpg";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755623846/pushpa_wmi80g.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755624058/sg_b3atsg.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755622928/st_of7fow.jpg";
  }
  // Top 10 in India Today
  if (categoryIndex === 3) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755689180/oethb_caa9gl.avif";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757264626/my_oxford_best_ikvdnn.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536232/kpop_vls2vq.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755690502/1752355417884_rmn951.png";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755690604/Thammudu_gurtag.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755690756/hit_chl1je.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755537500/jaat-ott_ibq8bj.webp";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755690963/Kathal_1-1_f4f1wa.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755691082/maxresdefault_m4hwok.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755624058/sg_b3atsg.jpg";
  }
  // Recently Added
  if (categoryIndex === 4) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756489479/bagheera_h9wokh.jpg";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756489505/vicky_d9lazq.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756018738/deva_lqud87.webp";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756488534/The-Diloma_munpda.jpg";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756019216/sijkandar_qkbodl.avif";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756489449/devara_necl89.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756488884/tehran_ebfpdu.webp";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536956/Chhaava-m2-1_xbuund.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755880302/saiyaara_pxoh7r.avif";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756017592/thug_life_wzpc3b.webp";
  }
  // Most Popular Movies
  if (categoryIndex === 5) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755537148/kung-fu-panda-4-2560x1440-15545_owz398.jpg";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755623846/pushpa_wmi80g.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1757266302/salaar_h9ggha.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536956/Chhaava-m2-1_xbuund.jpg";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756019216/sijkandar_qkbodl.avif";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756018738/deva_lqud87.webp";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756017592/thug_life_wzpc3b.webp";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756019969/hitman_sbfj7d.webp";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756020267/theamateur_pqbtsc.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755880302/saiyaara_pxoh7r.avif";
  }
  // Most Popular TV Shows
  if (categoryIndex === 6) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755622749/bb_mjeuhv.webp";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755623927/dexter_hzooc6.webp";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755622997/friends_trd4j8.jpg";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755623256/wlife_xxfg94.webp";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755624058/sg_b3atsg.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756397347/sandman_lfewen.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756397473/zero_day_hvl4ql.jpg";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756397287/linc_jnnnod.webp";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756397145/recruit_gsv4kz.jpg";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756397135/house_scqe6c.jpg";
  }
  // Kids shows and Movies
  if (categoryIndex === 7) {
    if (movieIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756544829/kung_fu_panda_zpsmlr.webp";
    if (movieIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756545372/orion_oupgzo.jpg";
    if (movieIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756545864/rise_ttbuo8.webp";
    if (movieIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756545246/shaun_the_o58hon.jpg";
    if (movieIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756545442/zig_and_sharko_sxxwqe.jpg";
    if (movieIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756544919/power_hivucu.jpg";
    if (movieIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756544816/paw_petrol_wz3pzq.jpg";
    if (movieIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756545593/despicableme_tismr9.jpg";
    if (movieIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756545952/batman_ye29rj.avif";
    if (movieIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756545744/transformers_du3vja.jpg";
  }

  // Default placeholder
  return `/placeholder.svg?height=169&width=300&text=Movie${movieIndex + 1}`;
}

interface Category {
  title: string;
  movies: null[];
  showNumbers?: boolean;
}

export default function NewAndPopularPage() {
  const ytPlayerRef = useRef<any>(null);
  const ytContainerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const categories: Category[] = [
    { title: "New Releases", movies: Array(10).fill(null) },
    { title: "Trending Now", movies: Array(10).fill(null) },
    { title: "Popular on Netflix", movies: Array(10).fill(null) },
    { title: "Top 10 in India Today", movies: Array(10).fill(null), showNumbers: true },
    { title: "Recently Added", movies: Array(10).fill(null) },
    { title: "Most Popular Movies", movies: Array(10).fill(null) },
    { title: "Most Popular TV Shows", movies: Array(10).fill(null) },
    { title: "Kids shows and Movies", movies: Array(10).fill(null) },
  ];

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (ytPlayerRef.current) {
      if (isMuted) {
        ytPlayerRef.current.unMute();
        ytPlayerRef.current.setVolume(100);
      } else {
        ytPlayerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const handleHeroEnter = () => {
    setIsHovered(true);
    // Start playing the video immediately when hovering
    if (isPlayerReady && ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === 'function') {
      try {
        // Always call playVideo - it's safe even if already playing
        ytPlayerRef.current.playVideo();
        // Small delay to ensure the play command is processed
        setTimeout(() => {
          if (ytPlayerRef.current && typeof ytPlayerRef.current.unMute === 'function') {
            ytPlayerRef.current.unMute();
            ytPlayerRef.current.setVolume(100);
          }
        }, 100);
      } catch (error) {
        console.error("Error playing video:", error);
      }
    }
  };

  const handleHeroLeave = () => {
    setIsHovered(false);
    // Pause the video when not hovering
    if (isPlayerReady && ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === 'function') {
      try {
        ytPlayerRef.current.pauseVideo();
        ytPlayerRef.current.mute();
      } catch (error) {
        console.error("Error pausing video:", error);
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    const createPlayer = () => {
      try {
        const YT = (window as any).YT;
        if (!YT || !ytContainerRef.current) return;
        ytPlayerRef.current = new YT.Player(ytContainerRef.current, {
          videoId: "L0YnZuYb4Aw",
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 0,
            playsinline: 1,
            rel: 0,
            mute: 0,
            fs: 0,
            cc_load_policy: 0,
            iv_load_policy: 3,
            showinfo: 0,
            disablekb: 1,
            enablejsapi: 1,
            origin: window.location.origin,
            loop: 1,
            playlist: "L0YnZuYb4Aw",
            preload: "auto",
            start: 0,
            wmode: "opaque",
            widgetid: 1,
            autohide: 1,
            showsearch: 0,
            branding: 0,
            annotations: 0,
            playerapiid: "ytplayer"
          },
          events: {
            onReady: (event: any) => {
              // Mark player as ready and start playing the video
              setIsPlayerReady(true);
              event.target.loadVideoById("L0YnZuYb4Aw");
              event.target.playVideo();
              event.target.unMute();
              event.target.setVolume(100);
            },
            onStateChange: (event: any) => {
              // If video ends, replay it
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                // Only replay if we're currently hovering (video should be playing)
                if (isHovered) {
                  event.target.playVideo();
                }
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
              <Link href="/movies" className="text-gray-300 hover:text-white">
                Movies
              </Link>
              <Link href="/new-and-popular" className="text-white font-semibold hover:text-gray-300">
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
      <div className="relative h-screen group mt-[0.2cm]" onMouseEnter={handleHeroEnter} onMouseLeave={handleHeroLeave}>
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dx9bvma03/image/upload/v1757838885/aib_poster_nbdr1f.webp"
            alt="AIB poster background"
            fill
            className="object-cover"
            priority
          />
          <div
            ref={ytContainerRef}
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none overflow-hidden yt-cover scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 md:px-12">
          <div className="max-w-2xl pt-28 md:pt-40 lg:pt-48 -mt-[0.3cm] ml-[0.4cm]">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">Alice in Borderland</h1>
            <p className="mb-6 text-lg md:text-xl">
            Arisu and Usagi, now married and living in the real world, as they are forced back into the dangerous Borderland after a mysterious man obsessed with the afterlife kidnaps Usagi
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
      <div className="relative z-20 -mt-[calc(8rem+0cm)] space-y-12 pb-20">
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
                      <div className={`absolute -left-4 top-0 z-10 text-6xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-8xl stroke-1 stroke-black [-webkit-text-stroke:1px_black] ${movieIndex === 3 ? 'tracking-[0.1em] [paint-order:stroke_fill]' : ''}`}>
                        {movieIndex + 1}
                      </div>
                    )}
                    <div className="relative aspect-video overflow-hidden rounded">
                      <Image
                        src={getCardImageSrc(categoryIndex, movieIndex)}
                        alt={`Movie ${movieIndex + 1}`}
                        fill
                        className={
                          categoryIndex === 0 && movieIndex === 4
                            ? "object-cover object-[center_40%]" // 5th image in New Releases - moved down
                            : categoryIndex === 2 && movieIndex === 0
                            ? "object-cover scale-110" // First image in Popular on Netflix - zoomed
                            : "object-cover"
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="px-4 py-12 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Link href="#" className="block hover:underline">FAQ</Link>
            <Link href="#" className="block hover:underline">Help Center</Link>
            <Link href="#" className="block hover:underline">Terms of Use</Link>
            <Link href="#" className="block hover:underline">Privacy</Link>
          </div>
          <div className="space-y-3">
            <Link href="#" className="block hover:underline">Account</Link>
            <Link href="#" className="block hover:underline">Ways to Watch</Link>
            <Link href="#" className="block hover:underline">Corporate Information</Link>
            <Link href="#" className="block hover:underline">Only on Netflix</Link>
          </div>
          <div className="space-y-3">
            <Link href="#" className="block hover:underline">Media Center</Link>
            <Link href="#" className="block hover:underline">Jobs</Link>
            <Link href="#" className="block hover:underline">Cookie Preferences</Link>
            <Link href="#" className="block hover:underline">Contact Us</Link>
          </div>
          <div className="space-y-3">
            <Link href="#" className="block hover:underline">Gift Cards</Link>
            <Link href="#" className="block hover:underline">Netflix Shop</Link>
            <Link href="#" className="block hover:underline">Legal Notices</Link>
            <Link href="#" className="block hover:underline">Speed Test</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
