const API_REPOS = 'https://api.github.com/users/Sveta2808/repos';

export async function fetchRepos(onFetchedRep) {
    const response = await fetch(API_REPOS);
    const data = await response.json();
    const repos = data.map(repos => ({
        full_name: repos.full_name,
        html_url: repos.html_url,
        description: repos.description

    }));
    onFetchedRep(repos);
}