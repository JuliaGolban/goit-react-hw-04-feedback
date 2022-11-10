import { useState } from 'react';
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

  const handleFeedback = type => {
    setFeedback(state => ({
      ...state,
      [type]: state[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    return parseInt((good * 100) / countTotalFeedback()) || 0;
  };

  const positivePercentage = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();

  //  == Use of individual useState ==
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  // const options = ['good', 'neutral', 'bad'];

  // const positivePercentage = countPositiveFeedbackPercentage();
  // const total = countTotalFeedback();

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

  // const countTotalFeedback = () => {
  //   return good + neutral + bad;
  // };

  // const countPositiveFeedbackPercentage = () => {
  //   return parseInt((good * 100) / countTotalFeedback()) || 0;
  // };

  return (
    <Container>
      <FeedbackOptoins
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
      />

      {total !== 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};
