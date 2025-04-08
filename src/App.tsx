// import React, { useState } from "react";
// import "./App.css";
// import { RepoList } from "./components/RepoList";
// import { CommitsChart } from "./components/CommitsChart";

// function App() {
//   const [username, setUsername] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="container">
//       <header>
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4M8 7h.01M4 21h16M4 17h16M4 13h16M4 9h16M4 5h16" />
//   </svg>
//   GitHub User Analyzer
// </header>

//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="input"
//         />
//         <button type="submit" className="button">Analyze</button>
//       </form>

//       {submitted && (
//         <>
//           <RepoList username={username} />
//           <CommitsChart username={username} />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import "./App.css";
import { RepoList } from "./components/RepoList";
import { RepoReadme } from "./components/RepoReadme";
import { CommitsChart } from "./components/CommitsChart";

function App() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4M8 7h.01M4 21h16M4 17h16M4 13h16M4 9h16M4 5h16"
          />
        </svg>
        GitHub User Analyzer
      </header>

      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">
            Analyze
          </button>
        </form>

        {submitted && (
          <>
            <RepoList username={username} />
            <CommitsChart username={username} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
