import { useState } from "react";
//import { useState, useEffect } from "react";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";
import Description from "./description/Description";

export default function App() {
  const [feedbackType, setFeedbackType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedbackType({
      ...feedbackType,
      good: feedbackType.good + 1,
      neutral: feedbackType.neutral + 1,
      bag: feedbackType.bad + 1,
    });
  }
    return (
      <>
        <Description/>
        <Options updateFeedback={updateFeedback} />
        <Feedback feedbackType={feedbackType} />
      </>
    );
  }

