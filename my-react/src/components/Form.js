import { useState } from "react";

export function Form({ onAdd }) {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    function handleAdd() {
        onAdd(title, company, description,link);
        setTitle('');
        setCompany('');
        setDescription('');
        setLink('');
    }


    return (
        <div>

           
                <label htmlFor="title">Title:</label>
                <br></br>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <br></br>
                <label htmlFor="name">Company name:</label>
                <br></br>
                <input
                    type="text"
                    id="name"
                    value={company}
                    onChange={e => setCompany(e.target.value)} />

                <br></br>
                <label htmlFor="description">Description:</label>
                <br></br>
                <textarea rows="5" cols="50" 
                name="description"
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    >
                        
                </textarea>
                <br></br>
                <label htmlFor="link">Link:</label>
                <br></br>
                <input
                    type="text"
                    id="link"
                    value={link}
                    onChange={e => setLink(e.target.value)} />
                <button onClick={handleAdd}> Add Work Experience </button>
            
        </div >
    );
}