import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Lupa = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <Path
      stroke="#585555"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.94}
      strokeWidth={2}
      d="M18.938 31.511c7.291-.048 13.164-5.887 13.117-13.04-.048-7.153-5.997-12.913-13.29-12.865-7.291.048-13.164 5.887-13.117 13.04.048 7.154 5.998 12.914 13.29 12.865ZM28.249 27.656l7.689 7.443"
    />
  </Svg>
);
export default Lupa;