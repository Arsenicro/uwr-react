import { useState } from "react";
import "./main.css";

export type FormStatus = "empty" | "typing" | "submitting" | "success" | "error";

interface FormProps {
  status: FormStatus;
}

function Form({ status }: FormProps) {
  const [answer, setAnswer] = useState("");

  if (status === "success") {
    return (
      <div className="card">
        <div id="success-message" className="success">
          <h2>Good answer!</h2>
          <p>Paris is correct.</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    // Change status to 'submitting'

    setTimeout(() => {
      // if (answer.toLowerCase() === 'paris') 
      //     Change status to 'success'
      // else 
      //     Change status to 'error'
    }, 1500);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);

    // if (status === 'error')  Change to 'typing'
    // if (e.target.value.length === 0) Change to 'empty'
  };

  return (
    <div className="card">
      <div id="quiz-container">
        <h2>Quiz Time</h2>
        <p>Which city is the capital of France?</p>

        <form id="quiz-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="answer-input"
            value={answer}
            onChange={handleInput}
            placeholder="Enter city name..."
            autoComplete="off"
            disabled={status === "submitting"}
            style={{
              borderColor: status === "error" ? "red" : undefined,
            }}
          />
          <button
            type="submit"
            id="submit-btn"
            disabled={status === "submitting" || status === "empty"}
          >
            {status === "submitting" ? "Checking..." : "Submit Answer"}
          </button>
        </form>

        {status === "error" && (
          <div id="error-message" className="error">
            Incorrect answer. Please try again!
          </div>
        )}
      </div>
    </div>
  );
}

const statuses = [
  "empty",
  "typing",
  "submitting",
  "error",
  "success",
] as const;

export function FormExample() {
  return (
    <div style={{ padding: "2rem", display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))" }}>
      {statuses.map(status => (
        <div key={status}>
          <h2>{status}</h2>
          <Form status={status} />
        </div>
      ))}
    </div>
  )
}