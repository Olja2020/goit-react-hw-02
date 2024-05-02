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
  const updateFeedback = (type) => {
    console.log(feedbackType); 
      console.log(type);
      for (let key in feedbackType) {
      switch (key) {
        case 'good':
          setFeedbackType({
            ...feedbackType,
           good: feedbackType.good + 1,
          })
          
          break;
        case 'neutral':
          setFeedbackType({
            ...feedbackType,
           neutral: feedbackType.neutral + 1,
          })
          break;
        case 'bad':
          setFeedbackType({
            ...feedbackType,
           bad: feedbackType.bad + 1,
          })
          break;
  
        default:
          console.log(100);
          break;
      }}
           
  
 }

 
    return (
      <>
        <Description/>
        <Options updateFeedback={updateFeedback} />
        <Feedback feedbackType={feedbackType} />
      </>
    );
  }

