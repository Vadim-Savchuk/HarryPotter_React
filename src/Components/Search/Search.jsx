import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';

import { filteredArry } from '../../Functions';

import style from './Search.module.css';

function Search({ arr, searchValue, changeInput, done }) {
    
    const filter = filteredArry(arr, searchValue);

    return (
        <form className={style.searchOffer}>

            <input
                type="text"
                value={searchValue}
                onChange={changeInput}
                placeholder='Search...'
            />

            {arr &&
                done &&
                <ul className={style.searchList}>
                    {searchValue &&
                        filter.map((elem, index) => {
                            return <Link key={index} to={`/people/${elem.id}`}><li>{elem.name}</li></Link>
                        }).slice(0, 10)
                    }
                </ul>
             }

        </form>
    );
}

Search.propTypes = {
    done: PropTypes.bool,
    spells: PropTypes.array,
    changeInput: PropTypes.func,
    searchValue: PropTypes.string,
}

export default Search;
