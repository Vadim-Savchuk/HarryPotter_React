import { useState, useEffect } from 'react';

import { useInput }         from '../../Hooks/useInput';
import { getResponseFetch } from '../../Functions';

import GoBack      from '../../Components/GoBack/GoBack';
import SpellsList  from '../../Components/SpellsList/SpellsList';
import SpellsModal from '../../Components/SpellsModal/SpellsModal';
import Search      from '../../Components/Search/Search';
import NoDate      from '../../Components/NoDate/NoDate';
import Loading     from '../../Components/Loading/Loading';

import style   from './SpellsPage.module.css';

function SpellsPage() {
    const [spells, setSpells]       = useState([]);
    const [errorApi, setErrorApi]   = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [descriptionId, setDescriptionId] = useState(null);
    const [isActiveModal, setIsActiveModal] = useState(false);

    const searchInput = useInput('');

    const getResource = async (url) => {
        const res = await getResponseFetch(url);

        if (res) {
            setSpells(res);
            setErrorApi(false);
            setIsLoading(false)
        } else {
            setErrorApi(true);
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getResource('https://hp-api.onrender.com/api/spells');
    }, [isActiveModal]);

    const withDesc = (id) => {
        const desc = spells.filter(elem => {
            return elem.id === id;
        })

        setIsActiveModal(true);
        setDescriptionId(desc);
    }

    return (
        <main className={style.spellsPage}>
            <section className='container'>

                <div className='plank'>
                    <GoBack color={'white'} />
                    <Search arr={spells} searchValue={searchInput.value} changeInput={searchInput.onChange} done={false} />
                </div>

                { isLoading && <Loading/>}

                {errorApi
                    ? <NoDate />
                    :
                    (<>
                        {spells &&
                            <SpellsList spells={spells} withDesc={withDesc} searchValue={searchInput.value} />
                        }

                        {isActiveModal &&
                            <SpellsModal descriptionId={descriptionId} setIsActiveModal={setIsActiveModal} />
                        }
                    </>)
                }

            </section>
        </main>
    );
}

export default SpellsPage;