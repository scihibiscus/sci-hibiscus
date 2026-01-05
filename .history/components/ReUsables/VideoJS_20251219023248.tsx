// components/VideoJS.tsx
import React, { useEffect, useRef } from "react";
import type Player from "video.js/dist/types/player";
import type { VideoJsPlayerOptions } from "video.js";
import videojs from "video.js";
import "video.js/dist/video-js.css";

type VideoJSProps = {
  options: VideoJsPlayerOptions;
};

export const VideoJS: React.FC<VideoJSProps> = ({ options }) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    // initialize player only once
    if (!playerRef.current && videoRef.current) {
      // create a <video> element (video.js expects a <video> or a container)
      const videoElement = document.createElement("video");
      videoElement.className = "video-js vjs-big-play-centered";
      // Make sure it can play inline on mobile
      videoElement.setAttribute("playsinline", "true");

      videoRef.current.appendChild(videoElement);

      // initialize video.js player
      const player = (playerRef.current = videojs(videoElement, options));
    } else if (playerRef.current) {
      // update player with new sources/options when props change
      const player = playerRef.current;

      // update autoplay if provided
      if (typeof options.autoplay !== "undefined") {
        player.autoplay(Boolean(options.autoplay));
      }

      // update sources if provided
      if (Array.isArray(options.sources) && options.sources.length > 0) {
        player.src(options.sources as any);
      }
    }

    // cleanup on unmount
    return () => {
      const player = playerRef.current;
      if (player) {
        if (!player.isDisposed?.()) {
          player.dispose();
        }
        playerRef.current = null;
      }
      // remove the created <video> element (optional)
      if (videoRef.current) {
        videoRef.current.innerHTML = "";
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]); // re-run effect when options or onReady change

  return (
    <div data-vjs-player >
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;
