import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './GoBack.module.css';

function GoBack({ color }) {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1)
    }

    return (
        <button
            onClick={goBack}
            style={{ color: color }}
            className={style.button}
        >Go Back</button>
    );
}

GoBack.propTypes = {
    color: PropTypes.string,  
}

export default GoBack;
