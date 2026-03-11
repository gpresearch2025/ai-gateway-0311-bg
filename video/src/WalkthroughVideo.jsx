import React from "react";
import {
  AbsoluteFill,
  Audio,
  Easing,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig
} from "remotion";
import {scenes, totalDurationInFrames} from "./scenes";

const palette = {
  ink: "#1f2430",
  muted: "#d9dde2",
  lightMuted: "rgba(244, 247, 250, 0.72)",
  accent: "#53bf94",
  gold: "#f4e7ba",
  border: "rgba(255,255,255,0.12)",
  panel: "rgba(255,255,255,0.08)",
  panelStrong: "rgba(255,255,255,0.14)",
  bgTop: "#18344d",
  bgBottom: "#0f1825"
};

const SceneCard = ({scene, progress, index}) => {
  return (
    <div
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "1.08fr 0.92fr",
        gap: 40,
        alignItems: "stretch",
        opacity: progress,
        transform: `translateY(${interpolate(progress, [0, 1], [28, 0])}px)`
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          border: `1px solid ${palette.border}`,
          borderRadius: 36,
          padding: "42px 44px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.18)"
        }}
      >
        <div>
          <div
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontSize: 24,
              color: palette.gold,
              marginBottom: 18
            }}
          >
            {scene.eyebrow}
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.04,
              fontWeight: 750,
              letterSpacing: "-0.04em",
              marginBottom: 22
            }}
          >
            {scene.title}
          </div>
          <div
            style={{
              fontSize: 33,
              lineHeight: 1.42,
              color: palette.muted,
              maxWidth: 920
            }}
          >
            {scene.body}
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16
          }}
        >
          {scene.bullets.map((bullet) => (
            <div
              key={bullet}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: `1px solid ${palette.border}`,
                borderRadius: 22,
                padding: "18px 20px",
                fontSize: 24,
                lineHeight: 1.4,
                color: "#f7f9fb"
              }}
            >
              {bullet}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))",
          border: `1px solid ${palette.border}`,
          borderRadius: 36,
          padding: "34px 34px 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.18)"
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              borderRadius: 999,
              padding: "10px 16px",
              background: "rgba(83, 191, 148, 0.12)",
              color: palette.accent,
              fontSize: 22,
              fontWeight: 700,
              marginBottom: 24
            }}
          >
            Scene {String(index + 1).padStart(2, "0")}
          </div>
          <div
            style={{
              fontSize: 24,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: palette.lightMuted,
              marginBottom: 14
            }}
          >
            {scene.visualTitle}
          </div>
          <div
            style={{
              fontSize: 52,
              lineHeight: 1.1,
              fontWeight: 700,
              marginBottom: 22
            }}
          >
            AI Gateway
          </div>
        </div>
        <div style={{display: "grid", gap: 14}}>
          {scene.visualLines.map((line, lineIndex) => (
            <div
              key={line}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                padding: "16px 18px",
                borderRadius: 22,
                background:
                  lineIndex === 0
                    ? "rgba(83, 191, 148, 0.18)"
                    : "rgba(255,255,255,0.08)",
                border: `1px solid ${
                  lineIndex === 0 ? "rgba(83, 191, 148, 0.22)" : palette.border
                }`
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: lineIndex === 0 ? palette.accent : palette.gold,
                  flexShrink: 0
                }}
              />
              <div
                style={{
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: "#f7f9fb"
                }}
              >
                {line}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 28,
            padding: "18px 20px",
            borderRadius: 22,
            background: palette.panelStrong,
            border: `1px solid ${palette.border}`
          }}
        >
          <div
            style={{
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: palette.gold,
              marginBottom: 10
            }}
          >
            Why it matters
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.4,
              color: "#f7f9fb"
            }}
          >
            The website works best when the audience can see the control logic, not just hear a claim about it.
          </div>
        </div>
      </div>
    </div>
  );
};

const Subtitle = ({text}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: 120,
        right: 120,
        bottom: 54,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          background: "rgba(10, 14, 22, 0.72)",
          border: `1px solid ${palette.border}`,
          color: "#ffffff",
          borderRadius: 24,
          padding: "18px 28px",
          fontSize: 28,
          lineHeight: 1.45,
          textAlign: "center",
          boxShadow: "0 20px 44px rgba(0, 0, 0, 0.24)"
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const WalkthroughVideo = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${palette.bgTop}, ${palette.bgBottom})`,
        color: "#f7f9fb",
        fontFamily: "Segoe UI, Arial, sans-serif"
      }}
    >
      <Audio src={staticFile("voiceover.wav")} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(83, 191, 148, 0.18), transparent 28%), radial-gradient(circle at 88% 4%, rgba(244, 231, 186, 0.14), transparent 22%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 48,
          borderRadius: 42,
          border: `1px solid ${palette.border}`,
          background: "rgba(255,255,255,0.04)"
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 92,
          right: 92,
          top: 74,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: palette.lightMuted
          }}
        >
          Consentext AI Gateway
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center"
          }}
        >
          <div
            style={{
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(83, 191, 148, 0.14)",
              color: palette.accent,
              fontSize: 22,
              fontWeight: 700
            }}
          >
            Team Walkthrough
          </div>
          <div
            style={{
              fontSize: 24,
              color: palette.lightMuted
            }}
          >
            {(frame / fps).toFixed(1)}s
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 128,
          left: 92,
          right: 92,
          bottom: 140
        }}
      >
        {scenes.map((scene, index) => {
          const from = scenes
            .slice(0, index)
            .reduce((sum, current) => sum + current.durationInFrames, 0);
          return (
            <Sequence key={scene.id} from={from} durationInFrames={scene.durationInFrames}>
              <SceneWithTransition index={index} scene={scene} />
            </Sequence>
          );
        })}
      </div>
      <Subtitle text={getCurrentScene(frame).caption} />
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 18,
          height: 6,
          borderRadius: 999,
          background: "rgba(255,255,255,0.12)"
        }}
      >
        <div
          style={{
            width: `${(frame / totalDurationInFrames) * 100}%`,
            height: "100%",
            borderRadius: 999,
            background: "linear-gradient(90deg, #53bf94, #f4e7ba)"
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

const SceneWithTransition = ({scene, index}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic)
  });
  return <SceneCard scene={scene} progress={progress} index={index} />;
};

const getCurrentScene = (frame) => {
  let cursor = 0;
  for (const scene of scenes) {
    cursor += scene.durationInFrames;
    if (frame < cursor) {
      return scene;
    }
  }
  return scenes[scenes.length - 1];
};
