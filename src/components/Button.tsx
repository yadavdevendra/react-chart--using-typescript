import React from 'react'
type ButtonProps={
    // handleClick?:()=>void
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
    name:string
}
const Button = (props:ButtonProps) => {
    // function handleClick():void{
    //     console.log("Button Click")
    // }
  return (<button onClick={(event)=>props.handleClick(event,1)}>{props.name}</button>
  )
}
export default Button
