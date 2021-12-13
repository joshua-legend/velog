import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardMakeForm from "../card_make_form/card_make_form";
import styles from './editor.module.css';

const Editor = ({ cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map(key => (
      <CardEditForm
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
      />
    ))}
    <CardMakeForm onAdd={addCard} />
  </section>
);

export default Editor;
