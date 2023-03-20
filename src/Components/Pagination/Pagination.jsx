import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './Pagination.module.css';

function Pagination({ total, elemsLength }) {
    const pages = [];

    for (let i = 1; i <= Math.ceil(total / elemsLength); i++) {
        pages.push(i);
    }

    return (
        <ul className={style.paginate}>
            {
                pages.map(page => {
                    return (
                        <li key={page}>
                            <Link to={`/people/?page=${page}`}>
                                {page}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}

Pagination.propTypes = {
    total: PropTypes.number,
    elemsLength: PropTypes.number,
}

export default Pagination;
