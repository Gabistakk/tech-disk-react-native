import { Defs, G, Path, Rect, Svg } from "react-native-svg";

const HomeButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={161}
    height={161}
    fill="none"
    {...props}
  >
    <G filter="url(#homeButton_svg__a)">
      <Rect
        width={130}
        height={130}
        x={145.136}
        y={143}
        fill="#fff"
        rx={65}
        transform="rotate(179.94 145.136 143)"
      />
      <Path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={4.8}
        d="m71.043 54.318 19.58 19.539c2.313 2.308 2.317 6.088.01 8.4l-19.54 19.581"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default HomeButton;
