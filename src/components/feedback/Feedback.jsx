import css from "./Feedback.module.css";

function Feedback({ feedbackType }) {
  return (
    <>
      <div className={css.feedbackResult}>Good: {feedbackType.good}</div>
      <div className={css.feedbackResult}>Neutral: {feedbackType.neutral}</div>
      <div className={css.feedbackResult}>Bad: {feedbackType.bad}</div>
      {/* <div className="feedbackResult">Total: {total}</div>
      <div className="feedbackResult">Positive: {positive}</div> */}
    </>
  );
}

export default Feedback;
