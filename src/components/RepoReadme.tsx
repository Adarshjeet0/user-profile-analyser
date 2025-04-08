// src/components/RepoReadme.tsx
import React, { useEffect, useState } from "react";

interface RepoReadmeProps {
  username: string;
  repoName: string;
}

export const RepoReadme: React.FC<RepoReadmeProps> = ({ username, repoName }) => {
  const [readme, setReadme] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const res = await fetch(
          `https://raw.githubusercontent.com/${username}/${repoName}/main/README.md`
        );
        if (!res.ok) throw new Error("README not found");
        const data = await res.text();
        setReadme(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchReadme();
  }, [username, repoName]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>📘 {repoName} - README</h3>
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
      {readme ? (
        <pre style={{
          whiteSpace: "pre-wrap",
          background: "#f0f0f0",
          padding: "1rem",
          borderRadius: "8px",
          overflowX: "auto",
          maxHeight: "400px"
        }}>
          {readme}
        </pre>
      ) : (
        !error && <p>Loading README...</p>
      )}
    </div>
  );
};
