export function Experience({ items }) {
    return (
        <div>
            <h3 class="title-main">Work Experience</h3>
            <div class="work-experience">
                <ul className="contact-info">
                    {items.map(item => (
                        <li key={item.id}>Title: {item.title}
                            <p>Company name: {item.name} </p>
                            <p>Description: {item.description} </p>
                            <a class="contact-info-link" href="">{item.link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}