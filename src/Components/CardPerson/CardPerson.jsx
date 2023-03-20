import { Link }       from 'react-router-dom';

import style from './CardPerson.module.css';

function CardPerson({ people, delateUniq }) {

    return (
        <Link to={`/people/${people.id}`} key={people.id}>

            {/* Card */}
            <li className={style.card}>

                {/* Img */}
                <div className={style.imgOffer}>
                    <img src={people.image} alt={people.name} />
                </div>

                {/* Name */}
                <h4 className={style.name}>{people.name}</h4>

                {/* Delate */}
                <button
                    className={style.uniq}
                    onClick={(event) => delateUniq(event, people.id)}
                >Delate</button>

            </li>

        </Link>
    );
}

export default CardPerson;
