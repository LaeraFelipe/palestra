import React, { useState } from "react";
import { Button } from "../../components/button";
import { TextInput } from "../../components/inputs/text-input";
import { Page, PageContent, PageHeader } from "../base";
import "./Register.css";

export default function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    onRegister({ name, email });
  };

  return (
    <Page>
      <PageHeader title="Registre-se"/>
      <PageContent>
        <TextInput
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button disabled={!name || !email} onClick={handleRegister}>
          Registrar
        </Button>
      </PageContent>
    </Page>
  );
}
