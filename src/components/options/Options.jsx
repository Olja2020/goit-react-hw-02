//import { useState } from 'react';
import css from "./Options.module.css";

function Options({ updateFeedback }) {
  return (
    <>
      <button className={css.buttonOptions} onClick={updateFeedback}>
        Good
      </button>
      <button className={css.buttonOptions} onClick={updateFeedback}>
        Neutral
      </button>
      <button className={css.buttonOptions} onClick={updateFeedback}>
        Bad
      </button>
      <button className={css.buttonOptions}>Reset</button>
    </>
  );
}

export default Options;
