import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  function handleAddQuestion(newQuestion) {
    // This function will need to update the state in QuestionList or
    // re-fetch the list of questions.
    // For simplicity, we might need to use a more sophisticated state management.
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList />
      )}
    </main>
  );
}

export default App;
