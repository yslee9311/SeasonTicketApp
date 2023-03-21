import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
  let fill = '#ffffff'
  if (props.hasOwnProperty('svgColor')) {
    fill = props.svgColor
  }
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.828 7H16v2H3.828l5.364 5.364-1.414 1.414L0 8 7.778.222l1.414 1.414L3.828 7z"
        fill={fill}
      />
    </Svg>
  )
}

export default SvgComponent
