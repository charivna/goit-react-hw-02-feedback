import { Button, Buttons } from "./App.styled"

export const Feedback = ({ options, onLeaveFeedback } ) => {
    return <Buttons>
        {options.map(option => <Button
            key={option}
            type='button'
            onClick={() => onLeaveFeedback(option)}
        >{ option}</Button>)}
    </Buttons>
}