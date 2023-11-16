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
const PfpIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={125}
    height={125}
    fill="none"
    {...props}
  >
    <G clipPath="url(#icon_js__a)">
      <Rect width={125} height={125} fill="url(#icon_js__b)" rx={62.5} />
      <Path
        fill="url(#icon_js__c)"
        d="M39.583 87.41c7.64 5.555 15.278 10 22.917 10 7.639 0 15.278-4.445 22.917-10-6.297-1.917-9.491-4.778-9.584-8.583 0-.679.005-1.642.01-3.45a9892.772 9892.772 0 0 1 .064-18.632c5.971-7.742 3.778-16.816 1.906-16.59-2.294.28-22.17-18.582-25.983-19.55-3.812-.967-13.497 2.155-15.163 10.853C35 40.156 34.303 62.08 40.625 70.833c1.799 2.491 4.632 3.466 8.5 2.923.005 1.82.016 2.842.042 4.904-.05 3.979-3.244 6.835-9.584 8.75Z"
      />
      <Path
        fill="#FC9F6A"
        d="M49.167 73.75c9.166-1.042 15-5 15-5s-6.667 8.333-15 10v-5Z"
      />
      <Path
        fill="url(#icon_js__d)"
        d="M78.958 56.875c2.871-6.904 14.375-20.965 4.459-29.715-3.334-16.25-21.75-14.452-34.042-10.702-8.261 2.52-14.5 7.5-15.833 3.75-8.334 6.952-4.16 13.75 1.333 15.702 4.986 1.77 13.417 3.541 27.752 1.875 2.561-.298 2.025 7.545 3.393 8.393 2.053 1.272 3.647-6.727 9.275-4.325s2.288 13.537-3.753 13.537c-2.084 0-3.125 5.728 2.5 8.437 4.083 2.006 3.05-2.466 4.916-6.952Z"
      />
      <Path
        fill="url(#icon_js__e)"
        d="M106.25 100.128c3.967 8.066 6.25 26.667 6.25 26.667h-100s2.284-18.603 6.25-26.667c3.966-8.063 27.125-15.542 27.125-15.542 12.797 4.997 20.628 4.997 33.238-.003 0 0 23.17 7.48 27.137 15.545Z"
      />
      <Path
        fill="url(#icon_js__f)"
        d="m65.417 87.5 2.083 38.333h-10L59.583 87.5s1.945-2.083 2.917-2.083c.972 0 2.917 2.083 2.917 2.083Z"     
      />
      <Path
        fill="#645050"
        d="m65.891 95.288-6.552-3.785.244-4.003c1.297-1.389 2.269-2.083 2.917-2.083.648 0 1.62.694 2.917 2.083l.475 7.788Z"
      />
      <Path
        fill="#fff"
        d="m62.5 85.413-4.167 7.504L45.417 85l3.75-5.417L62.5 84.51l13.333-4.926L79.583 85l-12.916 7.917-4.167-7.504Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="icon_js__b"
        x1={62.5}
        x2={62.5}
        y1={0}
        y2={125}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#806A6A" />
        <Stop offset={1} stopColor="#665654" />
      </LinearGradient>
      <LinearGradient
        id="icon_js__c"
        x1={60.467}
        x2={60.467}
        y1={20.436}
        y2={97.41}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F7B186" />
        <Stop offset={1} stopColor="#FFC299" />
      </LinearGradient>
      <LinearGradient
        id="icon_js__d"
        x1={58.1}
        x2={58.1}
        y1={13.912}
        y2={64.32}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1D0024" />
        <Stop offset={1} stopColor="#100014" />
      </LinearGradient>
      <LinearGradient
        id="icon_js__e"
        x1={62.5}
        x2={62.5}
        y1={84.583}
        y2={126.795}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1D0024" />
        <Stop offset={1} stopColor="#100014" />
      </LinearGradient>
      <LinearGradient
        id="icon_js__f"
        x1={62.5}
        x2={62.5}
        y1={85.417}
        y2={125.833}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#806A6A" />
        <Stop offset={1} stopColor="#665654" />
      </LinearGradient>
      <ClipPath id="icon_js__a">
        <Rect width={125} height={125} fill="#fff" rx={62.5} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PfpIcon;