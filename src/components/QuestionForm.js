import React, { useState, useEffect } from "react";

function QuestionForm({ onAddQuestion }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });
  
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Cleanup function
    return () => {
      setIsMounted(false);
    };
  }, []);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { prompt, answer1, answer2, answer3, answer4, correctIndex } = formData;
    const itemData = {
      prompt,
      answers: [answer1, answer2, answer3, answer4],
      correctIndex: parseInt(correctIndex),
    };

    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((newQuestion) => {
        if (isMounted) {
          onAddQuestion(newQuestion);
          setFormData({
            prompt: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            correctIndex: 0,
          });
        }
      });
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
    </section>
  );
}

export default QuestionForm;
