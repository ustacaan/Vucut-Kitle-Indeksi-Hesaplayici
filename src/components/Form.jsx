import { useRef, useState } from "react";

export default function Form({ isImperial }) {
  const [result, setResult] = useState();
  const heightInput = useRef();
  const height2Input = useRef();
  const weightInput = useRef();
  const weight2Input = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const height = Number(heightInput.current?.value);
    const height2 = Number(height2Input.current?.value);
    const weight = Number(weightInput.current?.value);
    const weight2 = Number(weightInput.current?.value);
    

    if (isImperial) {
      const heightStatus = (height * 30.48) + (height2 * 2.54);
      const weightStatus = (weight * 6.35) + (weight2 * 0.453592);
      const bmi = weightStatus / ((heightStatus / 100) ** 2);

      setResult(bmi);

    } else {
      const bmi = weight / ((height / 100) ** 2);

      setResult(bmi);
    }
  }

  function getBMIStatus(bmi) {
    if (bmi < 18.5) {
      return "Weak";
    } else if (bmi >= 18.5 && bmi < 25.0) {
      return "Normal";
    } else if (bmi >= 25.0 && bmi < 30.0) {
      return "Overweight";
    } else if (bmi >= 30.0 && bmi < 35.0) {
      return "Fat";
    } else {
      return "Obese";
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      
      <h5>Height</h5>
      {isImperial ? (
        <>
          <input type="number" name="height" placeholder="Ft" required min="0" max="12" ref={heightInput} />
          <input type="number" name="height2" placeholder="In" required min="0" max="12" ref={height2Input} />
        </>
      ) : (
        <input type="number" name="height" placeholder="Cm" required min="0" max="250" ref={heightInput} />
      )}

      <h5>Weight</h5>
      {isImperial ? (
        <>
          <input type="number" name="weight" placeholder="St" required min="0" max="250" ref={weightInput} />
          <input type="number" name="weight2" placeholder="Lbs" required min="0" max="1000" ref={weight2Input} />
        </>
      ) : (
        <input type="number" name="weight" placeholder="Kg" required min="0" max="250" ref={weightInput} />
      )}

      <button type="submit">Calculate</button>

      {result && (
        <div>
          <h5>BMI Result = {result.toFixed(1)}</h5>
          <p>Status: {getBMIStatus(result)}</p>
        </div>
      )}
    </form>
  );
}
