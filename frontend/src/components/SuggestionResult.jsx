export default function SuggestionResult() {
    const suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];
  
    if (suggestions.length === 0) {
      return (
        <div className="text-center">
          <p>No suggestions found. Please <a href="/" className="text-blue-500 underline">upload a new photo</a>.</p>
        </div>
      );
    }
  
    return (
      <>
        <h1 className="text-2xl font-semibold mb-4 text-center">Clothing Suggestions</h1>
        <ul className="list-disc list-inside space-y-2">
          {suggestions.map((item, idx) => (
            <li key={idx} className="text-lg">{item}</li>
          ))}
        </ul>
      </>
    );
  }
  