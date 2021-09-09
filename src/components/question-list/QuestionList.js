import React, { useEffect, useState } from "react";
import { config } from "../../config";
import "./QuestionList.css";

export function QuestionList() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const load = async () => {
    setLoading(true);
    try {
      const result = await fetch(`${config.api}/questions`, {
        method: "GET",
        headers: new Headers({
          "Access-Control-Allow-Origin": "*",
        }),
      });
      const jsonResult = await result.json();
      setQuestions(jsonResult);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="question-list">
      {loading && <div className="question-list__loading">Carregando...</div>}
      {questions?.map((item) => (
        <div className="question-list-item">
          <div className="question-list-item__question">{item.name} - {item.question}</div>
          <div className="question-list-item__answer">Resposta - {item.answer}</div>
        </div>
      ))}
    </div>
  );
}
