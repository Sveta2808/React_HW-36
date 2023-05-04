export function Experience({ items }) {
    return (
        <div>
            <h3 className="title-main">Work Experience</h3>
            <div className="work-experience">
                <ul className="contact-info">
                    {items.map(item => (
                        <li key={item.id}>Title: {item.title}
                            <p>Company name: {item.company} </p>
                            <p>Description: {item.description} </p>
                            <a className="contact-info-link" href="">{item.link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}