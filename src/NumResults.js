export function NumResults({ movies }) {
    return (
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
        {/* Found <strong>X</strong> results */}
      </p>
    );
  }