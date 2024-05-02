import css from "./Feedback.module.css";

function Feedback({ feedback }) {
  return (
    <>
      <div className={css.feedbackResult}>Good: {feedback.good}</div>
      <div className={css.feedbackResult}>Neutral: {feedback.neutral}</div>
      <div className={css.feedbackResult}>Bad: {feedback.bad}</div>
    
    </>
  );
}

export default Feedback;
