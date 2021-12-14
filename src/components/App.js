import React, { useEffect, useState } from "react";

function App() {

    const [dog, setDog] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => setDog(data.message))
    }, [])

    if(!dog) return <p>Loading...</p>;

    return(
        <img src={dog} alt="A Random Dog" />
    );

}

export default App;