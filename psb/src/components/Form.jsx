import React from "react";

const handleSubmit = () => {
    alert("Form submitted")
}

const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};
const datetime = new Intl.DateTimeFormat("en-US", options).format(Date.now())

const Form = ({ }) => {
    return (
        <form className="p-4 grid grid-flow-col grid-rows-5 gap-4 flex">
            <h3 className="text-4xl text-left"> Add/Edit Todo</h3>
            <label>
                Description:
                <input className="m-4 border-2 border-solid" type="input" name="todoDescription" />
            </label>

            <label>
                {/* TO DO - Add logic to get the date when you open for edit*/}
                {`Created on: ${datetime.replace(',','@')}`}
            </label>

            <label>
                <input className="m-2 p-4" type="checkbox" name="todoCompleted" />
                Completed
            </label>

            <input className="bg-blue-500 w-24 p-4" type="submit" value="Submit" onClick={handleSubmit} />
        </form>
    );
};

export default Form;
