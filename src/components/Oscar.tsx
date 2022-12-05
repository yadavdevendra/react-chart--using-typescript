import React from 'react'
type oscarprops={
    children:React.ReactNode
}
const Oscar = (props:oscarprops) => {
  return (
    <div>
    {props.children}
    </div>
  )
}

export default Oscar
