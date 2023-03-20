import { useState, useEffect } from 'react';
import { Link }                from 'react-router-dom';

import { useQueryParam }       from '../../Hooks/useQueryParam';
import { useInput }            from '../../Hooks/useInput';
import { usePaginate }         from '../../Hooks/usePaginate';

import { getResponseFetch }    from '../../Functions';

import PeopleList from '../../Components/PeopleList/PeopleList';
import GoBack     from '../../Components/GoBack/GoBack';
import Pagination from '../../Components/Pagination/Pagination';
import Loading    from '../../Components/Loading/Loading';
import NoDate     from '../../Components/NoDate/NoDate';
import Sort       from '../../Components/Sort/Sort';
import Search     from '../../Components/Search/Search';

import style from './PeoplePage.module.css';

function PeoplePage() {
    const [people, setPeople]       = useState([]);
    const [errorApi, setErrorApi]   = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Param page and paginate
    const query         = useQueryParam();
    const queryPage     = query.get('page');
    const pagination    = usePaginate(queryPage);

    // Change inputs
    const searchInput = useInput('');
    const selectInput = useInput('');
   
    const getResource = async (url) => {
        const res = await getResponseFetch(url);

        if (res) {
            const peopleList = res.filter(people => {
                return people.image;
            })

            const resultList = peopleList.map(({ name, id, image, house }) => {
                return {
                    id,
                    name,
                    image, 
                    house,
                }
            })

            setPeople(resultList);
            setErrorApi(false);
            setIsLoading(false);
        } else {
            setErrorApi(true);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getResource('https://hp-api.onrender.com/api/characters');
    }, [queryPage]);

    return (
        <main className={style.peoplePage}>
            <section className="container">
                <div className='plank'>

                    <GoBack color={'var(--main-color)'} />

                    <Link className='homeLink' to='/'>Home</Link>

                    <Search arr={people} searchValue={searchInput.value} changeInput={searchInput.onChange} done={true}/>

                    <Sort selectValue={selectInput.value} selectChange={selectInput.onChange}/>
                
                </div>

                {isLoading && <Loading/>}

                {errorApi
                    ? <NoDate/>
                    : (<>
                        {people && (
                            <>
                                <PeopleList people={people} lastIndex={pagination.lastIndex} firstIndex={pagination.firstIndex} selectValue={selectInput.value}/>
                                <Pagination total={people.length} elemsLength={pagination.elemsLength}/>
                            </>
                        )}
                    </>)
                }
            </section>
        </main>
    );
}

export default PeoplePage;