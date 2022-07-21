import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';

function App() {

    const [cards, setCards] = useState("abc");

    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={<Contact card={cards} />} />
                    <Route path='card/:user' component={Card} />
                </Switch>

            </div>
        </BrowserRouter>

        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Navbar />} />
        //     </Routes>
        // </BrowserRouter>
    )
}

export default App;