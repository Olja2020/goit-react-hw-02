import { useState } from "react";
//import { useState, useEffect } from "react";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";
import Description from "./description/Description";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedback({
            ...feedback,
           [feedbackType]: feedback[feedbackType] + 1,
          }) 
      
  }

 
    return (
      <>
        <Description/>
        <Options updateFeedback={updateFeedback} />
        <Feedback feedbackType={feedback} />
      </>
    );
  }

