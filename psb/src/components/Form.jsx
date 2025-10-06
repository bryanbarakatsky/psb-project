import { React, useState } from "react";
import todoData from "../data/todoData.js"


// Check for useMemo usage - if we are reading the files and finding the length
const handleSubmit = (e) => {
    console.log(e.target.value)
    alert("Todo completed")
}

const handleCompleted = () => {
    alert("Todo completed")
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

    const [description, setDescription] = useState("Add Description");

    const handleChange = (e) => {
        setDescription(e.target.value)
    }

    return (
        <form className="w-p-4 grid grid-flow-col grid-rows-5 gap-4 flex" onSubmit={handleSubmit}>
            <h3 className="text-4xl text-left"> Add/Edit Todo</h3>
            <label>
                Description:
                <input className="m-4 border-2 border-solid rounded-lg" type="input" name="todoDescription" value={description} onChange={(e) => handleChange(e)} />
            </label>

            <label>
                {/* TO DO - Add logic to get the date when you open for edit*/}
                {`Created on: `} <span>{datetime.replace(',', '@')}</span>
            </label>

            <label>
                <input className="m-2 p-4" type="checkbox" name="todoCompleted" onClick={handleCompleted} />
                Completed
            </label>

            <input className="bg-blue-500 w-24 p-4 rounded-lg " type="submit" value="Submit" />
        </form>
    );
};

export default Form;
