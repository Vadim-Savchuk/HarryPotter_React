import { useContext } from 'react';

import UniqContext from '../../Context/uniqContext';

import CardPerson from '../../Components/CardPerson/CardPerson';
import GoBack     from '../../Components/GoBack/GoBack';

import style from './UniqPage.module.css';

function UniqPage() {
    const {uniqList, setUniqList} = useContext(UniqContext);
    
    // Delate elem
    function delateUniq(event, id){
        event.preventDefault();

        const filteredNow = uniqList.filter(elem => {
            if(elem.id !== id){
                return elem;
            }

            return null
        })

        setUniqList(filteredNow);
        localStorage.setItem('uniqList', JSON.stringify(uniqList))
    }

    return (
        <main className={style.uniqPage}>
            <section className='container'>

                <div className='plank'>
                    <GoBack color={'white'} />
                </div>

                {uniqList.length === 0 && 
                    <h2 className={style.info}>It's still empty here</h2>
                }

                <ul className={style.elemsList}>
                    {uniqList &&
                        uniqList.map(people => {
                            return <CardPerson key={people.id} people={people} delateUniq={delateUniq}/>
                        })
                    }
                </ul>

            </section>
        </main>
    );
}

export default UniqPage;
