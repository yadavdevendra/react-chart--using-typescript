import React from 'react'
type inputeProps={
value:string
handleChange: (event:React.ChangeEvent<HTMLInputElement>)=>void
}
const Inputetype = (props:inputeProps) => {
    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event);

    }
  return (
    <div>
      <input type="text" value={props.value} onChange={handleInputChange}/>
    </div>
  )
}

export default Inputetype
