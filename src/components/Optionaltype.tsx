import React from "react";
type optionalprops = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
const Optionaltype = (props: optionalprops) => {
  const { name, messageCount = 10 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${name} ! you have ${messageCount}`
        : "Welcome Guest"}
    </div>
  );
};
export default Optionaltype;
