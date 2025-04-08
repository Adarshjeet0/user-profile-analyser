import React from "react";

interface CommitsChartProps {
  username: string;
}

export const CommitsChart: React.FC<CommitsChartProps> = ({ username }) => {
  // Placeholder for future integration with GitHub GraphQL API or other service
  return (
    <div className="chart">
      <h2>Daily Commits Chart</h2>
      <p>Advanced chart will be displayed here for user: <strong>{username}</strong>.</p>
      <p>(This section can be expanded using GitHub GraphQL API or third-party libraries like Chart.js)</p>
    </div>
  );
};
