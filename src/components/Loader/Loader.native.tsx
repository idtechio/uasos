import LottieView, { AnimatedLottieViewProps } from "lottie-react-native";
import React from "react";
import AnimationJSON from "../../../public/assets/spinner/spinner.json";
import { LOADER } from "./style";

type Props = Omit<AnimatedLottieViewProps, "source">;
export default function Loader(props: Props) {
  return (
    <LottieView
      style={LOADER}
      source={AnimationJSON}
      autoPlay
      loop
      {...props}
    />
  );
}
