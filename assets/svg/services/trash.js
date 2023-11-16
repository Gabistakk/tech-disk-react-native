import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
const Trash = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={29}
    height={37}
    fill="none"
    {...props}
  >
    <Path fill="url(#trash_svg__a)" d="M0 0h29v37H0z" />
    <Defs>
      <Pattern
        id="trash_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use
          xlinkHref="#trash_svg__b"
          transform="matrix(.00436 0 0 .00326 0 .151)"
        />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="trash_svg__b"
        width={225}
        height={225}
      />
    </Defs>
  </Svg>
);
export default Trash;