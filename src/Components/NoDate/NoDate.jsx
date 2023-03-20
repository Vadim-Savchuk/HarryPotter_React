import style from './NoDate.module.css';

function NoDate() {
    return (
        <div className={style.errorDate}>
            <h2>An error occurred, please try again later</h2>
        </div>
  );
}

export default NoDate;
