import React, {useLayoutEffect, useState} from 'react';

const App = () => {
    const [random, setRandom] = useState(0)
    useLayoutEffect(() => {
        if (random === 0) {
            setRandom(Math.floor(Math.random() * 100))
        }
    }, [random]);
    return (
        <div className={"app"}>
            <div className="container">
                <div>
                    <h1>Random: <span>{random}</span></h1>
                    <button className={"btn btn-sm btn-outline-primary"} onClick={() => setRandom(0)}>
                        Generate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;