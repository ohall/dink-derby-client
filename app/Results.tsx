import React from 'react';

interface Result {
  id: number;
  title: string;
  description: string;
}

interface ResultsViewProps {
  results: Result[];
}

const ResultsView: React.FC<ResultsViewProps> = ({ results }) => {
  return (
    <div className="results-view">
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.id} className="result-item">
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default ResultsView;
