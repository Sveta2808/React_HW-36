export function Repos( repos ) {
    return (
        <div >
            <ul>
                {repos.map(repo => (
                    <li 
                    key={repo.id}>
                        Title: {repo.full_name}
                        <p>Description: {repo.description} </p>

                    </li>
                ))}
            </ul>
        </div>

    )

}