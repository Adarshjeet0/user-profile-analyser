import React, { useEffect, useState } from "react";

interface RepoListProps {
  username: string;
}

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export const RepoList: React.FC<RepoListProps> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error(err));
  }, [username]);

  return (
    <div className="repo-list">
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <strong>{repo.name}</strong>
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
