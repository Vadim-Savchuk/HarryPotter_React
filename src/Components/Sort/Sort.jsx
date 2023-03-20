import PropTypes from 'prop-types';

import style from './Sort.module.css';

function Sort({selectChange, selectValue}) {

    return (
        <select value={selectValue} onChange={selectChange} className={style.select}>
            <option value=''>All</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
        </select>
    );
}

Sort.propTypes = {
    selectChange: PropTypes.func,
    selectValue: PropTypes.string,
}

export default Sort;
