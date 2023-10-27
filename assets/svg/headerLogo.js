import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const HeaderLogo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <Rect width={52} height={52} fill="url(#headerLogo_svg__a)" rx={36} />
    <Defs>
      <Pattern
        id="headerLogo_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#headerLogo_svg__b" transform="scale(.002)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="headerLogo_svg__b"
        width={500}
        height={500}
      />
    </Defs>
  </Svg>
);
export default HeaderLogo;
