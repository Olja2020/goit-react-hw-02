//import { useState } from 'react';
import css from "./Options.module.css";

function Options({ updateFeedback }) {
  return (
    <>
      <button className={css.buttonOptions} onClick={()=>updateFeedback('good')}>
        Good
      </button>
      <button className={css.buttonOptions} onClick={()=>updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.buttonOptions} onClick={()=>updateFeedback('bad')}>
        Bad
      </button>
      <button className={css.buttonOptions}>Reset</button>
    </>
  );
}

export default Options;
