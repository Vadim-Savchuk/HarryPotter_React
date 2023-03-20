import { useState }                     from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  UniqContext                     from '../Context/uniqContext';

import HomePage   from '../Pages/HomePage/HomePage';
import NotPage    from '../Pages/NotPage/NotPage';
import PeoplePage from '../Pages/PeoplePage/PeoplePage';
import PersonPage from '../Pages/PersonPage/PersonPage';
import SpellsPage from '../Pages/SpellsPage/SpellsPage';
import UniqPage   from '../Pages/UniqPage/UniqPage';

import './App.css';

function App() {
    const [uniqList, setUniqList] = useState([]);
    
    const value = {
        uniqList, 
        setUniqList
    }

    return (
        <UniqContext.Provider value={value}>
            <div className='wrapper'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/'       element={<HomePage />} />
                        <Route path='/people' element={<PeoplePage />} />
                        <Route path='/spells' element={<SpellsPage />} />
                        <Route path='/uniq'   element={<UniqPage />} />

                        <Route path='/people/:id' element={<PersonPage />} />
                        <Route path='/*'          element={<NotPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </UniqContext.Provider>

    );
}

export default App;