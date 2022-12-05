import React from "react";
type personListProps = {
  name: {
    first: string;
    last: string;
  }[];
};
const PersonList = (props: personListProps) => {
  return (
    <div>
      {props?.name?.map((item,i) => {
        return (
          <div key={i}>
            {item.first}
            {item.last}
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
