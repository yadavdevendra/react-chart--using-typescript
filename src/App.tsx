import "./App.css";
import ApiBarchart from "./components/ApiBarchart";
import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Heading from "./components/Heading";
import Inputegetdataonconsole from "./components/Inputegetdataonconsole";
import Inputetype from "./components/Inputetype";
import Optionaltype from "./components/Optionaltype";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import StylesProps from "./components/StylesProps";

function App() {
  // let data1 = ["anil","jeyo","merio"]
  // data1.push(100) // error becaue numer is not define in arry in type script
  // console.warn(data1)
  //   var arr = ["anil", "jeyo", "merio", 1];
  //   arr.push(100);
  //   console.warn(arr);
  //   var array = ["anil", "jeyo", "merio", 100, true];
  //   array.push(100);
  //   array.push(false);
  //   console.warn(array);
  //   let data: string | number | boolean = "dev"
  //   data = 30
  //   data = true
  //   console.warn(data);

  //   //type object
  //   let users = {
  //     name: "messi",
  //     age: 35,
  //     address: "USA"
  //   }
  //   users.name = "peter"
  //   // users.email="dev@gmail.com" //we can't create new key in object
  //   console.warn(users)
  //  //type object in ttype Script
  //   interface userType {
  //     name: string,
  //     age: number,
  //     address: string,
  //   }
  //   let user:userType={
  //     name:"dev",
  //     age:30,
  //     address:"USA"
  //   }
  //   console.warn(user);
  const personName = {
    first: "dev",
    last: "yadav",
  };
  //personlist array of object
  const personList = [
    {
      first: "dev",
      last: "yadav",
    },
    {
      first: "Hare",
      last: "Ram",
    },
    {
      first: "kisan",
      last: "Pandey",
    },
  ];

  return (
    <div className="App">
      <Greeting name="Devendra" age={26} address="USA" isLoggdin={false} />
      <Person name={personName} />
      <PersonList name={personList} />
      <Status status="loding" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Hello brother</Heading>
      </Oscar>
      <Optionaltype name="Devendra" isLoggedIn={true} />
      <Button
        name="Click"
        handleClick={(event, id) => {
          console.log("button click", event, id);
        }}
      />
      <Inputetype
        value="dev"
        handleChange={(event) => {
          console.log("button click", event);
        }}
      />
      <Inputegetdataonconsole />
      <div className="chart">
        <StylesProps styles={{border:"1px solid red",padding:"1rem",color:"green",width:"26%",marginLeft:"182px"}}/>
        <ApiBarchart />
      </div>
    </div>
  );
}

export default App;
