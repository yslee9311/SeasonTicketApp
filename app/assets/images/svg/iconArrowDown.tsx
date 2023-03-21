import * as React from "react"
import Svg, { Path } from "react-native-svg"

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
      <Path
        d="m11.889 13.061 4.95-4.95 1.414 1.414-6.364 6.364-6.364-6.364 1.414-1.414 4.95 4.95Z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
