import { Component } from "react";
import { Section } from "./Section";
import { Statistics } from "./Statistics";
import { Feedback } from "./FeedbackOption";
import { Notification } from "./Notification";


export class App extends Component {
 
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  
  }
  onLeaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }))
  }
  countTotalFeedback = () => 
    this.state.good + this.state.bad + this.state.neutral;
  
  
  countPositiveFeedbackPercentage = () => 
    Math.round((this.state.good/this.countTotalFeedback())*100)
  

  render() {

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const keys = Object.keys(this.state)
    
      return (
    <div>
        <Section title="Please leave feedback">
            <Feedback options={keys}
              onLeaveFeedback = {this.onLeaveFeedback}
            />
            {total ? (
              <Statistics good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />): (<Notification message='No feedback given'/>)}
      </Section>
    </div>
  )
  }
}
