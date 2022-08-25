import React from "react";

const list = "this is an apple";

let updated_list = list.split("");

console.log(updated_list.length, `${updated_list}`);

const Form = () => {
  return (
    <div>
      <form action="">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            id="getData"
            placeholder="Enter any value"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
