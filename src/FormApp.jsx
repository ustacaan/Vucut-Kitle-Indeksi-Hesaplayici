import { useState } from "react"
import Form from "./components/Form"

export default function FormApp() {
    const [isImperial, setIsImperial] = useState(true);

    return (
        <>
            <h3>Enter your details below</h3>
            <div className="bmiOptions">
                <label onClick={() => { setIsImperial(false) }}><input type="radio" name="bmi" />Metric</label>
                <label onClick={() => { setIsImperial(true) }}><input type="radio" name="bmi" defaultChecked /> Imperial</label>
            </div>
            <Form isImperial={isImperial} />
        </>
    )
}




