import { useState, useEffect } from 'react';
import { useParams }           from 'react-router-dom';
import { getResponseFetch }    from '../../Functions';

import GoBack  from '../../Components/GoBack/GoBack';
import NoDate  from '../../Components/NoDate/NoDate';
import Loading from '../../Components/Loading/Loading';

import style from './PersonPage.module.css';

function PersonPage() {
    const [person, setPerson]       = useState(null);
    const [errorApi, setErrorApi]   = useState(false);
    const { id }                    = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const getResource = async (url) => {
        const res = await getResponseFetch(url);

        if (res) {
            const peopleList = res.filter(people => {
                return people.id === id;
            })

            setPerson(peopleList[0]);
            setErrorApi(false);
            setIsLoading(false)
        } else {
            setErrorApi(true);
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getResource('https://hp-api.onrender.com/api/characters');
    }, []);

    return (
        <main className={style.personPage}>
            <section className='container'>
                <div className='plank'>
                    <GoBack color={'white'} />
                </div>

                {isLoading && <Loading />}

                {errorApi
                    ? <NoDate />
                    :
                    (<>
                        {person &&
                            (
                                <div className={style.person}>

                                    <div className={style.imgOffer}>
                                        <img src={person.image} alt={person.name} />
                                    </div>

                                    <ul className={style.dodInfo}>
                                        <li>                  {person.name || 'Unknowen'}</li>
                                        <li>Actor:            {person.actor || 'Unknowen'}</li>
                                        <li>Date Of Birth:    {person.dateOfBirth || 'Unknowen'}</li>
                                        <li>Species:          {person.species || 'Unknowen'}</li>
                                        <li>Gender:           {person.gender || 'Unknowen'}</li>
                                        <li>House:            {person.house || 'Unknowen'}</li>
                                        <li>Hair Colour:      {person.hairColour || 'Unknowen'}</li>
                                        <li>Patronus:         {person.patronus || 'Unknowen'}</li>
                                        <li>Ancestry:         {person.ancestry || 'Unknowen'}</li>
                                        <li>Hogwarts Staff:   {person.hogwartsStaff ? 'Yes' : 'No'}</li>
                                        <li>Hogwarts Student: {person.hogwartsStudent ? 'Yes' : 'No'}</li>
                                        <li>Wizard:           {person.wizard ? 'Yes' : 'No'}</li>
                                        <li>Alive:            {person.alive ? 'Yes' : 'No'}</li>
                                    </ul>

                                </div>
                            )
                        }
                    </>)
                }

            </section>
        </main>
    );
}

export default PersonPage;