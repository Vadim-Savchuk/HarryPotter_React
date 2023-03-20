import PropTypes from 'prop-types';
import style from './SpellsList.module.css';

function SpellsList({ spells, withDesc, searchValue }) {

    console.log(typeof searchValue);

    return (
        <ul className={style.splellsList}>
            {
                spells.filter(elem => {
                    return elem.name.toLowerCase().includes(searchValue.toLowerCase())
                }).map(spell => {
                    return (
                        <li key={spell.id} onClick={() => withDesc(spell.id)}>
                            {spell.name}
                        </li>
                    )
                })
            }
        </ul>
    );
}

SpellsList.propTypes = {
    spells: PropTypes.array,  
    withDesc: PropTypes.func,  
    searchValue: PropTypes.string,  
}

export default SpellsList;
