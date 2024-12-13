import './App.css';
import Feedback from './Feedback/Feedback.jsx';
import Options from './Options/Options.jsx';
import Description from './Description/Description.jsx';
import Notification from './Notification/Notification.jsx';
import { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('count'));
    if (!savedData?.length) {
      return savedData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const updateFeedback = feedbackType => {
    setCount(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };
  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);
  const handleReset = () => {
    setCount({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  };

  return (
    <div className="container">
      <Description />
      <Options
        update={updateFeedback}
        total={totalFeedback}
        reset={handleReset}
      />
      {Boolean(totalFeedback) || <Notification />}
      {Boolean(totalFeedback) && (
        <Feedback
          countName={count}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
