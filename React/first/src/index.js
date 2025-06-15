//1. Import biblotek
import React from "react";
import ReactDOM from "react-dom/clinet";

//2. referencje div o id root
const el = document.getElementById("root");

//3. Przejmuj kontrole
const root = ReactDOM.createRoot(el);

//4. Tworze komponent
const App = () =>{
    return (    
        <form>
        <label for="imie">Wpisz swoje imie</label>
        <input type="imie" name="imie" id="imie"/>
        <button style="background-color: blue; color: white;">Wyślij</button>
        </form>
    );
};

//5. Pokazac komponent
root.render(<App/>);
