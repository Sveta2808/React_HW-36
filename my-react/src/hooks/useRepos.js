import { useState, useEffect } from "react";

const API_REPOS = 'https://api.github.com/users/Sveta2808/repos';

export function useRepos(initialRepos = []) {
    const [repos, setRepos] = useState(initialRepos);

    useEffect(() => {
        fetch(API_REPOS)
            .then(response => response.json())
            .then(data => {
                const repos = data.map(repo => ({
                    name: repo.full_name,
                    url: repo.html_url,
                    description: repo.description

                }));
                setRepos(repos);
            })
    }, [])

    return repos;
}