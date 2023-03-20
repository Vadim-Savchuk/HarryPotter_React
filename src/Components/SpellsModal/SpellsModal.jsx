import PropTypes from 'prop-types';

import style from './SpellsModal.module.css';

function SpellsModal({setIsActiveModal, descriptionId}) {

    return (
        <div className={style.box}>
            <div className={style.modal}>
                <p className={style.desc}>{descriptionId && descriptionId[0].description}</p>
                <button className={style.closedButton} onClick={() => setIsActiveModal(false)}>X</button>
            </div>
        </div>
    );
}

SpellsModal.propTypes = {
    descriptionId: PropTypes.array,  
    setIsActiveModal: PropTypes.func,  
}

export default SpellsModal;
