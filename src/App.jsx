import { Component } from 'react';
import { Container } from './components/base/Container.styled';
import { FeedbackOptoins } from './components/FeedbackOptoins/FeedbackOptoins';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  // total= 0;
  // positivePercentage = 0;
  
  handleFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    })
  }
      
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return this.total = good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const { total } = this;

    if (!this.total) return;
    return this.positivePercentage = parseInt((good / total) * 100);
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const total= this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>

        <FeedbackOptoins
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
        />

        {total !== 0 ?
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
       : <Notification message="There is no feedback" /> }
      
      </Container>
      );
  }
}
