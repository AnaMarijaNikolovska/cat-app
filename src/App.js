import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TopBar from "./components/TopBar";
import ClickSound from "./components/ClickSound";
import CatBreedsPage from "./pages/CatBreedsPage";
import CatFactsPage from "./pages/CatFactsPage";
import RandomFact from "./pages/RandomFact";

function App() {
    return (
        <div
            className="App"
            style={{
                backgroundColor: '#D7A666',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TopBar/>
            <Router>
                <ClickSound/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cat-breeds" element={<CatBreedsPage />} />
                    <Route path="/cat-facts" element={<CatFactsPage />} />
                    <Route path="/random-fact" element={<RandomFact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
