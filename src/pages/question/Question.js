import React, { useState } from "react";
import { Button } from "../../components/button/Button";
import { TextAreaInput } from "../../components/inputs/text-area-input";
import { TextInput } from "../../components/inputs/text-input";
import { Page, PageContent, PageHeader } from "../base";
import "./Question.css";

export default function Question({ onRegister }) {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");

  const handleRegister = () => {
    onRegister({ title, question });
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
        <Button disabled={!title || !question} onClick={handleRegister}>
          Perguntar
        </Button>
      </PageContent>
    </Page>
  );
}
