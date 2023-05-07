import { useState, useEffect } from "react";


const API_REPOS = 'https://api.github.com/users/Sveta2808/repos'; 

export default function useRepos (inicialRepos =[]) {
    const [repos, setRepos] = useState (inicialRepos);

    useEffect(() =>{
        fetch( API_REPOS)
        .then(responce => responce.json())
        .then (data=>{
            console.log(data);
        })

    }, [])

    return repos;
}