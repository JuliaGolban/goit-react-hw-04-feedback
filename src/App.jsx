import { useState, useEffect, useRef } from 'react';
import { Container } from './components/base/Container.styled';
import { FeedbackOptoins } from './components/FeedbackOptoins/FeedbackOptoins';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = useRef(0);
  const positivePercentage = useRef(0);
  const options = ['good', 'neutral', 'bad'];

  useEffect(() => {
    total.current = good + neutral + bad;
    positivePercentage.current = parseInt((good / total.current) * 100);
  }, [good, neutral, bad]);

  const handleFeedback = name => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Container>
      <FeedbackOptoins options={options} onLeaveFeedback={handleFeedback} />

      {total.current !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total.current}
          positivePercentage={positivePercentage.current}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = type => {
//     this.setState(prevState => {
//       return { [type]: prevState[type] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;

//     return (this.total = good + neutral + bad);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const { total } = this;

//     if (!this.total) return;
//     return (this.positivePercentage = parseInt((good / total) * 100));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <Container>
//         <FeedbackOptoins
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.handleFeedback}
//         />

//         {total !== 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Container>
//     );
//   }
// }
