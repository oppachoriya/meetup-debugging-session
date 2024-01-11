import React, { useState } from "react";
import {  Input, Button } from "antd";

// Define a function to reverse a float number
function reverseFloat(num) {
  // Initialize the result to zero
  let result = 0;
  // Check if the number is negative and make it positive
  let isNegative = num < 0;
  if (isNegative) {
    num = -num;
  }
  // Check if the number has a decimal point and get its position
  let hasDecimal = num % 1 !== 0;
  let decimalPosition = 0;
  if (hasDecimal) {
    // Count how many digits are after the decimal point
    while (num % 1 !== 0) {
      num *= 10;
      decimalPosition++;
    }
  }
  // Reverse the number using the same logic as reversing an integer
  while (num > 0) {
    // Get the last digit of the number
    let lastDigit = num / 10;
    // Add the last digit to the result after multiplying it by 10
    result = result * 10 + lastDigit;
    // Remove the last digit of the number
    num = Math.floor(num / 10);
  }
  // If the number has a decimal point, move it to the correct position
  if (hasDecimal) {
    // Divide the result by 10 to the power of the decimal position
    result = result / Math.pow(10, decimalPosition);
  }
  // If the number is negative, make the result negative
  if (isNegative) {
    result = -result;
  }
  // Return the result
  return result;
}

// Define a functional component that takes a float number in text and displays its reverse number
function ReverseFloat() {
  // Define a state variable to store the input value
  const [input, setInput] = useState("");
  // Define a state variable to store the output value
  const [output, setOutput] = useState("");
  // Define a handler function to update the input value
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  // Define a handler function to update the output value
  const handleOutput = () => {
    // Check if the input is a valid float number
    if (isNaN(input) || input.trim() === "") {
      alert("Please enter a valid float number");
    } else {
      // Call the reverseFloat function and set the output value
      setOutput(reverseFloat(input));
    }
  };
  // Return the JSX element

  
  return (
    <div>
      <h1>Reverse Float</h1>
      <p>Enter a float number and click the button to see its reverse</p>
      <Input type="text" value={input} onChange={handleInput} />
      <Button onClick={handleOutput} >Reverse</Button>
      <p>
        The reverse of {input} is {output}
      </p>
    </div>
  );
}

export default ReverseFloat;
