import React, { useState } from "react";
import { Button } from "../../components/button/Button";
import { TextAreaInput } from "../../components/inputs/text-area-input";
import { TextInput } from "../../components/inputs/text-input";
import { QuestionList } from "../../components/question-list/QuestionList";
import { config } from "../../config";
import { Page, PageContent, PageHeader } from "../base";
import "./Question.css";

export default function Question({ user }) {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuestion = async () => {
    setLoading(true);
    try {
      await fetch(`${config.api}/questions`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }),
        body: JSON.stringify({ title, question, name: user.name }),
      });

      setTitle("");
      setQuestion("");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Page>
      <PageHeader title="Faça sua pergunta" />
      <PageContent>
        <TextInput
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextAreaInput
          placeholder="Pergunta"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button
          disabled={!title || !question | loading}
          onClick={handleQuestion}
        >
          Perguntar
        </Button>
        <h2>Perguntas respondidas</h2>
        <QuestionList />
      </PageContent>
    </Page>
  );
}
