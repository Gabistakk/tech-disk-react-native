import * as React from "react";
import Svg, { G, Rect, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Tag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={132}
    height={58}
    fill="none"
    {...props}
  >
    <G filter="url(#tag_js__a)">
      <Rect width={124} height={50} x={4} fill="#F2F4F7" rx={25} />
    </G>
    <Defs></Defs>
  </Svg>
);
export default Tag;