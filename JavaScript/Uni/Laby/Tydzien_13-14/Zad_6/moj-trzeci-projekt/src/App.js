// app.js (React version)

import React, { useState } from "react";

function App() {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState(null);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const inputNumber = parseInt(number);
        if (isNaN(inputNumber) || inputNumber < 0) {
            setResult("Proszę wprowadzić poprawną liczbę całkowitą większą lub równą zero.");
            return;
        }

        const sqrtResult = newtonRaphsonSqrt(inputNumber);
        setResult(`Pierwiastek kwadratowy z ${inputNumber} wynosi: ${sqrtResult.toFixed(0)}`);
    };
    
    const newtonRaphsonSqrt = (number) => {
        if (number === 0) return 0;
        let x = number;
        let epsilon = 0.000001;
        let prevX;
        do {
            prevX = x;
            x = 0.5 * (x + number / x);
        } while (Math.abs(x - prevX) > epsilon);
        return x;
    };
    
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <form onSubmit={handleSubmit}>
                <label>
                    Wprowadź liczbę całkowitą:
                    <input 
                        type="number" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} 
                        required
                    />
                </label>
                <button type="submit">Oblicz</button>
            </form>
            <div>{result}</div>
        </div>
    );
}

export default App;
   