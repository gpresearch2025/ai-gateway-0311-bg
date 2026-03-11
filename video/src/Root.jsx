import {Composition} from "remotion";
import {WalkthroughVideo} from "./WalkthroughVideo";
import {totalDurationInFrames} from "./scenes";

export const RemotionRoot = () => {
  return (
    <Composition
      id="TeamWalkthrough"
      component={WalkthroughVideo}
      durationInFrames={totalDurationInFrames}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
