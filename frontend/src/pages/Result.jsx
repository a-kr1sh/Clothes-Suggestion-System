import SuggestionResult from "../components/SuggestionResult";

export default function Result() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <SuggestionResult />
      </div>
    </div>
  );
}
