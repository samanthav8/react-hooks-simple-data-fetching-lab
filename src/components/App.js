// create your App component here
import React, { useState, useEffect } from "react";

function App(props) {
    const [dogImage, setDogImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Fetch random dog image
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
          setDogImage(data.message);
          setIsLoading(false);
        })
    })
  return (
    <div className="App">
        <h1>Random Dog Image</h1>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <img src={dogImage} alt="A Random Dog" />
        )}
    </div>
  )
}


export default App

