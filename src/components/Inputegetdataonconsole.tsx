import React, { useState } from 'react'
type inputeProps={
// handleChange: (event:React.ChangeEvent<HTMLInputElement>)=>void
}
const Inputegetdataonconsole = (props: inputeProps) => {
    const [name, setName] = useState<string>()
  const handleInputChange = (e:string) => {
    setName(e)
    console.log(name);
  };
  return (
    <div>
      <input type="text" value={name} onChange={(e:any)=>handleInputChange(e.target.value)
       } />
    </div>
  );
};

export default Inputegetdataonconsole
