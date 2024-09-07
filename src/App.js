import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const TextConvert = async (text) => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_API,
      params: {
        input_text: text,
        to_language: "en",
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_x_rapidapi_key,
        "x-rapidapi-host": process.env.REACT_APP_API_x_rapidapi_host,
      },
    };

    try {
      const response = await axios.request(options);
      setOutputText(response.data.translated_text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="input">
          <textarea
            placeholder="Enter Your Text Here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
        </div>
        <div className="output">
          <textarea placeholder="See Your Output Here..." value={outputText}></textarea>
        </div>
      </div>
        <button onClick={() => TextConvert(inputText)}>Convert</button>
    </div>
  );
}

export default App;
