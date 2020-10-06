import React from "react";

const PersonList = ({ people = [] }) => {
  return (
    <ul>
      {people.map((person, i) => (
        <li key={i}>
          {person.firstName} {person.lastName}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
