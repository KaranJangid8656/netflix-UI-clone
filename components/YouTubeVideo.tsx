'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubeVideoProps {
  videoId: string;
  thumbnailUrl: string;
  alt: string;
  width?: number;
  height?: number;
}

export function YouTubeVideo({ videoId, thumbnailUrl, alt, width = 300, height = 169 }: YouTubeVideoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const playerRef = useRef<any>(null);
  const playerDivRef = useRef<HTMLDivElement>(null);
  const isPlayerInitialized = useRef(false);

  // Load YouTube IFrame API
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      if (playerDivRef.current && !isPlayerInitialized.current) {
        playerRef.current = new window.YT.Player(playerDivRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            mute: 0,  // Keep sound on by default
            controls: 0,
            showinfo: 0,
            rel: 0,
            enablejsapi: 1,
            modestbranding: 1,
            origin: window.location.origin,  // Required for some browsers
          },
          events: {
            onReady: () => {
              isPlayerInitialized.current = true;
            },
          },
        });
      }
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  // Handle play/pause based on hover state
  useEffect(() => {
    if (!isPlayerInitialized.current || !playerRef.current) return;

    if (isHovered) {
      playerRef.current.playVideo();
    } else {
      playerRef.current.pauseVideo();
      playerRef.current.seekTo(0);
    }
  }, [isHovered]);

  return (
    <div 
      className="relative overflow-hidden rounded transition-all duration-300 hover:scale-105 w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className={`relative w-full h-full ${isHovered ? 'hidden' : 'block'}`}>
        <Image
          src={thumbnailUrl}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="h-12 w-12 rounded-full bg-black/60 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* YouTube Player */}
      <div 
        ref={playerDivRef}
        className={`w-full h-full ${isHovered ? 'block' : 'hidden'}`}
      />
    </div>
  );
}
