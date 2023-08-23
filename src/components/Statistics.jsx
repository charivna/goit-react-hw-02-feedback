import { ListTitle, StatItems } from "./App.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div>
        <ListTitle>Statistics</ListTitle>
        <StatItems>Good: {good }</StatItems>
        <StatItems>Neutral: {neutral }</StatItems>
        <StatItems>Bad: {bad} </StatItems>
        <StatItems>Total: {total }</StatItems>
        <StatItems>Positive Feedback: {positivePercentage }%</StatItems>
    </div>
}