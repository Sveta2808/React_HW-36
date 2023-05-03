import { useState } from "react";

export function Form({ onAdd }) {
    const [value, setValue] = useState('');

    function handleAdd() {
        onAdd(value);
        setValue ('');
    }


    return (
        <div>

           
                <label htmlFor="title">Title:</label>
                <br></br>
                <input
                    type="text"
                    id="title"
                    value={value}
                    onChange={e => setValue(e.target.value)} />
                <br></br>
                <label htmlFor="name">Company name:</label>
                <br></br>
                <input
                    type="text"
                    id="name" />

                <br></br>
                <label htmlFor="Description">Description:</label>
                <br></br>
                <textarea rows="5" cols="50" name="description"
                    id="Description">
                </textarea>
                <br></br>
                <label htmlFor="link">Link:</label>
                <br></br>
                <input
                    type="text"
                    id="link" />
                <button onClick={handleAdd}> Add Work Experience </button>
            
        </div>
    );
}