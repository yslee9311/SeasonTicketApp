import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
  let fill = '#000'
  if (props.hasOwnProperty('svgColor')) {
    fill = props.svgColor
  }
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.172 7L.222 2.05 1.636.636 8 7l-6.364 6.364L.222 11.95 5.172 7z"
        fill={fill}
      />
    </Svg>
  )
}

export default SvgComponent
