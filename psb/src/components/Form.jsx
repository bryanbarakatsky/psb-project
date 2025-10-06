import React from "react";


const handleSubmit = () => {
    alert("Form submitted")
}

const Form = ({ }) => {
    return (
        <form className="p-4 grid grid-flow-col grid-rows-5 gap-4 flex">
            <h3 className="text-4xl text-left"> Add/Edit Todo</h3>
            <label>
                Description:
                <input className="bg-grey-200" type="input" for="Description" />
            </label>

            <label>
                {/* TO DO - Add logic to get the date when you open for edit*/}
                {`Created on ${Date.now()}`}
            </label>

            <input className="bg-blue-500 w-24 p-4" type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
    );
};

export default Form;
