import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Pen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 27H6a1 1 0 0 1-1-1v-5.587a.987.987 0 0 1 .288-.7l15-15a1 1 0 0 1 1.424 0l5.576 5.575a1 1 0 0 1 0 1.425L12 27ZM27 27H12M17 8l7 7"
    />
  </Svg>
);
export default Pen;