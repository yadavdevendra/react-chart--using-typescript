import React from 'react'
type styleprops={
    styles:React.CSSProperties
}
const StylesProps = (props:styleprops) => {
  return (
    <div style={props.styles}>
      Text Content Goes here
    </div>
  )
}

export default StylesProps
