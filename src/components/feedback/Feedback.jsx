import css from "./Feedback.module.css";

function Feedback({ feedbackType:{good, neutral, bad} }) {
  return (
    <>
      <div className={css.feedbackResult}>Good: {good}</div>
      <div className={css.feedbackResult}>Neutral: {neutral}</div>
      <div className={css.feedbackResult}>Bad: {bad}</div>
    
    </>
  );
}

export default Feedback;
