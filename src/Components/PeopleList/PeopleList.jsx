import { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';

import UniqContext         from '../../Context/uniqContext';

import { selectFilter, uniqTrue } from '../../Functions';

import style from './PeopleList.module.css';

function PeopleList({ people, lastIndex, firstIndex, selectValue }) {
    const { uniqList, setUniqList } = useContext(UniqContext);
    
    const filtered = useMemo(() => selectFilter(people, selectValue), [people, selectValue]);
    
    const uniqFunc = (event, id) => {
        event.preventDefault();
        
        const pushPeople = people.filter(elem => {
            if (elem.id === id) {
                return elem;
            }
            
            return null
        })
        
        const copy = Object.assign([], uniqList)
              copy.push(pushPeople[0]);
        
        setUniqList(copy)
    }
    
    return (
        <ul className={style.peopleList}>
            {filtered.map(({ id, name, image }) =>

                // Link
                <Link to={`/people/${id}`} key={id}>

                    {/* Card */}
                    <li className={style.card}>

                        {/* Img */}
                        <div className={style.imgOffer}>
                            <img src={image} alt={name} />
                        </div>

                        {/* Name */}
                        <h4 className={style.name}>{name}</h4>

                        {/* Add uniq */}
                        {!uniqTrue(id, uniqList) &&
                            <button
                                className={style.uniq}
                                onClick={(event) => uniqFunc(event, id)}
                            ></button>
                        }
                    </li>

                </Link>

            ).slice(firstIndex, lastIndex)}
        </ul>
    );
}

PeopleList.propTypes = {
    people: PropTypes.array,
    lastIndex: PropTypes.number,
    firstIndex: PropTypes.number,
    selectValue: PropTypes.string,
}

export default PeopleList;
