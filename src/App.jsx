import { useState, useEffect, useRef } from 'react';
import { Container } from './components/base/Container.styled';
import { FeedbackOptoins } from './components/FeedbackOptoins/FeedbackOptoins';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  // === Used  of common useState ===
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const total = useRef(0);
  const positivePercentage = useRef(0);

  useEffect(() => {
    const { good, neutral, bad } = feedback;
    total.current = good + neutral + bad;
    positivePercentage.current = parseInt((good / total.current) * 100);
  }, [feedback]);

  const handleFeedback = type => {
    setFeedback(state => ({
      ...state,
      [type]: state[type] + 1,
    }));
  };

  //  == Use of individual useState ==
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  // const total = useRef(0);
  // const positivePercentage = useRef(0);
  // const options = ['good', 'neutral', 'bad'];

  // useEffect(() => {
  //   total.current = good + neutral + bad;
  //   positivePercentage.current = parseInt((good / total.current) * 100);
  // }, [good, neutral, bad]);

  // const handleFeedback = type => {
  //   switch (type) {
  //     case 'good':
  //       setGood(state => state + 1);
  //       break;

  //     case 'neutral':
  //       setNeutral(state => state + 1);
  //       break;

  //     case 'bad':
  //       setBad(state => state + 1);
  //       break;

  //     default:
  //       throw new Error(`Unknows feedback type - ${type}`);
  //   }
  // };

  return (
    <Container>
      <FeedbackOptoins
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
      />

      {total.current !== 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total.current}
          positivePercentage={positivePercentage.current}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};
