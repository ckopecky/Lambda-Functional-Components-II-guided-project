import React from "react";
function Student(props) {
  console.log("student props", props);
  return (
    <div className="student-card">
      <img src={props.whatever.img} alt={props.whatever.name} />
      <div className="student-info">
        <h3>Name: {props.whatever.name}</h3>
        <p> Identity: {props.whatever.identity}</p>
        <p>Age: {props.whatever.age}</p>
        <p>Best Friends: {props.whatever.bestFriend}</p>
      </div>
    </div>
  );
}

export default Student;
