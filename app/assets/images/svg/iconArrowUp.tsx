import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props: any) {
  let fill = '#000'
  let ratio = 1;
  if (props.hasOwnProperty('svgColor')) {
    fill = props.svgColor
  }
  if (props.hasOwnProperty('ratio')) {
    ratio = props.ratio
  }
  return (
    <Svg
      width={24 * ratio}
      height={24 * ratio}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          d="m12.11 10.939-4.949 4.95-1.414-1.414L12.11 8.11l6.364 6.364-1.414 1.414-4.95-4.95Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
