
import { Section } from "./Section";
import { Statistics } from "./Statistics";
import { Feedback } from "./FeedbackOption";

export const App = () => {
  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback/>
        <Statistics />
      </Section>
    </div>
  );
};
