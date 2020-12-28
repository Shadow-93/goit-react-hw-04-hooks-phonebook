import React, { useState } from "react";

import s from "./ContactForm.module.css";

export default function Input({ onAddContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onInputSubmit = (e) => {
    e.preventDefault();

    onAddContact(name, number);

    setName("");
    setNumber("");
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <section className={s.section}>
      <form className={s.form} onSubmit={onInputSubmit}>
        <label className={s.lable}>
          Name
          <input
            className={s.input}
            type="text"
            value={name}
            onChange={onInputChange}
            name="name"
          ></input>
          Number
          <input
            className={s.input}
            type="number"
            value={number}
            onChange={onInputChange}
            name="number"
          ></input>
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
}
