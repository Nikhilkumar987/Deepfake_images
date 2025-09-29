import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: input }),
      });

      const data = await response.json();
      setResult(data.prediction);
    } catch (err) {
      console.error("Error:", err);
      setResult({ label: "ERROR", score: 0 });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          📰 Fake News Detector
        </h1>

        <textarea
          rows="6"
          placeholder="Enter news content here..."
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handlePredict}
          disabled={loading}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition disabled:bg-gray-400"
        >
          {loading ? "Checking..." : "Check News"}
        </button>

        {result && (
          <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Result:
            </h2>
            <p>
              <strong>Label:</strong>{" "}
              <span
                className={
                  result.label === "FAKE"
                    ? "text-red-600 font-bold"
                    : "text-green-600 font-bold"
                }
              >
                {result.label}
              </span>
            </p>
            <p>
              <strong>Confidence:</strong>{" "}
              {(result.score * 100).toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
