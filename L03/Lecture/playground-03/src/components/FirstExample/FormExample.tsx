import { useState } from "react";
import "./main.css";

export type FormStatus = "typing" | "submitting" | "success" | "error";


function Form() {
  const [answer, setAnswer] = useState("");
  /*   const [isTyping, setIsTyping] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false); */

  const [status, setStatus] = useState<FormStatus>("typing");

  const isEmpty = answer.length === 0;

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

    setStatus("submitting");

    // Change status to 'submitting'
    setTimeout(() => {
      if (answer.toLowerCase() === 'paris') {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);

    setStatus("typing");
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
            disabled={status === "submitting" || isEmpty}
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

      <Form />

    </div>
  )
}