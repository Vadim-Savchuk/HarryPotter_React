import { useLocation } from 'react-router-dom';
import style from './NotPage.module.css';

function NotPage() {
    const location = useLocation();

    console.log();

    return (
        <main className={style.notPage}>
            <section className="container">
                <div className={style.offer}>
                    <h2>Error 404</h2>
                    <h3>Not Page {location.pathname}</h3>
                </div>
            </section>
        </main>
    );
}

export default NotPage;
