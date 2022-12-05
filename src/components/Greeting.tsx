type Greetprops = {
  name: string;
  age: number;
  address: string;
  isLoggdin: boolean;
};
const Greeting = (props: Greetprops) => {
  return (
    <div>
      {!props.isLoggdin ?(
        <div>
          <h2>This is typescript Component</h2>
          <h2>Name:{props.name}</h2>
          <h2>age:{props.age}</h2>
          <h2>Address:{props.address}</h2>
        </div>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
};

export default Greeting;
