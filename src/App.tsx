import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App  mx-auto container">
            <Header />
            <SearchPage/>
            <Card/>
        </div>
    );
}

export default App;
