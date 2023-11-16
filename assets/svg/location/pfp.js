import * as React from "react";
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const LocationPfp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={113}
    height={112}
    fill="none"
    {...props}
  >
    <G filter="url(#pfp_js__a)">
      <G clipPath="url(#pfp_js__b)">
        <Rect width={105} height={104} x={4} fill="url(#pfp_js__c)" rx={52} />
        <Path
          fill="url(#pfp_js__d)"
          d="M88.7 81.467C91.267 86.32 92.55 104 92.55 104h-72.1s1.284-17.68 3.85-22.533c3.85-7.28 32.2-16.64 32.2-16.64s28.35 9.36 32.2 16.64Z"
        />
        <Path
          fill="#fff"
          d="M55.1 95.68c0-.274.082-.542.236-.77a1.412 1.412 0 0 1 2.154-.21 1.384 1.384 0 0 1 .303 1.51c-.105.254-.285.47-.515.623a1.41 1.41 0 0 1-1.768-.172 1.38 1.38 0 0 1-.41-.981Zm0-6.933c0-.275.082-.543.236-.77.154-.229.372-.407.628-.511a1.413 1.413 0 0 1 1.526.3 1.383 1.383 0 0 1 .303 1.511 1.39 1.39 0 0 1-.515.623 1.41 1.41 0 0 1-1.768-.173 1.38 1.38 0 0 1-.41-.98Zm0-6.934c0-.274.082-.542.236-.77a1.412 1.412 0 0 1 2.154-.21 1.383 1.383 0 0 1 .303 1.511 1.39 1.39 0 0 1-.515.622 1.41 1.41 0 0 1-1.768-.172 1.38 1.38 0 0 1-.41-.98Z"
        />
        <Path
          fill="url(#pfp_js__e)"
          d="m86.415 60.81-56.86-6.807c-2.803-14.74.522-24.027 9.975-27.86 4.37-14.183 21.379-13.03 26.2-11.873 16.407 3.935 23.301 19.448 20.685 46.54Z"
        />
        <Path
          fill="#FFDBC9"
          d="M48.1 68.987v-20.8c-8.757-.13-7.05-15.16 1.75-10.574 1.575.694 5.6-1.213 4.2-5.893 9.45 6.933 22.618-5.235 23.45 2.253 1.636 14.738-1.53 26.85-9.925 26.851-.895.034-1.79-.019-2.675-.157v8.32c-2.74 1.618-5.481 2.426-8.222 2.426-2.74 0-5.6-.808-8.578-2.426Z"
        />
        <Path
          fill="#FFBC9E"
          d="M64.9 60.667v2.773c-5.25 0-9.333-2.484-12.25-7.453 3.5 2.31 7.583 3.87 12.25 4.68Z"
        />
        <Path
          fill="#fff"
          d="M56.489 71.058c2.394-.113 8.411-1.34 8.411-3.992v-2.24c.642 0 2.48 1.502 3.425 2.774 3.737 5.027-.408 9.533-3.788 9.533-4.265 0-7.092-3.53-8.037-5.227-.945 1.698-3.772 5.227-8.037 5.227-3.38 0-7.525-4.506-3.788-9.533.945-1.272 2.783-2.773 3.425-2.773v2.24c0 2.65 5.859 3.878 8.389 3.991Z"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="pfp_js__c"
        x1={56.5}
        x2={56.5}
        y1={104}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC9B3" />
        <Stop offset={1} stopColor="#FFD2C2" />
      </LinearGradient>
      <LinearGradient
        id="pfp_js__d"
        x1={56.5}
        x2={56.5}
        y1={64.827}
        y2={104}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1D0024" />
        <Stop offset={1} stopColor="#100014" />
      </LinearGradient>
      <LinearGradient
        id="pfp_js__e"
        x1={57.774}
        x2={57.774}
        y1={60.809}
        y2={13.636}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E6864E" />
        <Stop offset={1} stopColor="#E67240" />
      </LinearGradient>
      <ClipPath id="pfp_js__b">
        <Rect width={105} height={104} x={4} fill="#fff" rx={52} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LocationPfp;