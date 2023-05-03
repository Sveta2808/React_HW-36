export function Form() {
    return (
        <div>

            <form className="form">
                Title:<br></br>
                <input type="text" name="title" />
                <br></br>
                Company name:<br></br>
                <input type="text" name="name" />

                <br></br>
                <label for="Description">Description:</label>
                <br></br>
                <textarea rows="5" cols="50" name="description"
                    id="Description">
                </textarea>
                <br></br>
                <input type="text" value="link" />
            </form>
        </div>
    );
}