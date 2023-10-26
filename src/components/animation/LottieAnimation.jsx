import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import spaceAnimation from "../../assets/lotties/space.json";
import "./LottieAnimation.css";

function LottieAnimation() {
  return (
    <div className="lottie_container">
      <Player autoplay loop src={spaceAnimation} className="player"></Player>
    </div>
  );
}

export default LottieAnimation;
