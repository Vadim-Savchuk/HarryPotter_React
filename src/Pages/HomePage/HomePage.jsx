import { useContext } from 'react';
import { NavLink }    from 'react-router-dom';

import UniqContext from '../../Context/uniqContext';
import UniqButton  from '../../Components/UniqButton/UniqButton';

import style from './HomePage.module.css';

function HomePage() {
    const {uniqList} = useContext(UniqContext);

    return (
        <div className={style.homePage}>
            <header className="container">

                {/* Header Plank */}
                <div className='plank'>
                    <UniqButton total={uniqList.length}/>
                </div>

                {/* Menu */}
                <nav className={style.nav}>
                    <NavLink
                        to="/"
                        className={`${style.linkMenu} ${style.active}`}
                    >Home</NavLink>

                    <NavLink
                        to="/people/?page=1"
                        className={style.linkMenu}
                    >Peoples</NavLink>

                    <NavLink
                        to="/spells"
                        className={style.linkMenu}
                    >Spells</NavLink>
                </nav>

            </header>
        </div>
    );
}

export default HomePage;
