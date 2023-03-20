import style from './Thema.module.css';

function Thema() {

    return (
        <div className={style.thema}>
            <button>Light</button>
            <button>Dark</button>
        </div>
    );
}

export default Thema;
