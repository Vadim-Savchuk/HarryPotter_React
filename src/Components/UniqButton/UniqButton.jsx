import { Link } from 'react-router-dom';

import like  from '../../Pages/HomePage/img/Like.png'
import style from './UniqButton.module.css';

function UniqButton({total}) {
    return (
        <Link to='/uniq' className={style.buttonUniq}>
            <img src={like} alt='like' />
            <p className={style.uniqLength}>{total}</p>
        </Link>
    );
}

export default UniqButton;
