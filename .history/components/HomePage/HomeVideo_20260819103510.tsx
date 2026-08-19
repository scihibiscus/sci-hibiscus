"use client";

import "@videojs/react/background/skin.css";
import { createPlayer, backgroundFeatures } from "@videojs/react";
import {
  BackgroundVideoSkin,
  BackgroundVideo,
} from "@videojs/react/background";
import styles from "../../styles/HomePage/herosection.module.scss";

const Player = createPlayer({ features: backgroundFeatures });

interface MyPlayerProps {
  src: string;
}

const HomeVideo = ({ src,  }: MyPlayerProps) => {
  return (
    <div
      className={styles.home__video}
      style={{ width: "100%", height: "100%" }}
    >
      <Player.Player>
        <BackgroundVideoSkin>
          <BackgroundVideo
            src={src}
            playsInline
            muted
            controls={false}
            autoPlay
            loop
          />
        </BackgroundVideoSkin>
      </Player.Player>
    </div>
  );
};

export default HomeVideo;
