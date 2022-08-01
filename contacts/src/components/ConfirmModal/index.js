import CloseIcon from '../../assets/close-icon.svg';
import '../../styles/modal.css';
import './styles.css';
// import useGlobalContext from '../../hooks/useGlobalContext';

function ConfirmModal({
    open,
    handleClose,
    title,
    subTitle,
    textBtnConfirm,
    textBtnCancel,
    handleConfirm
}) {

    // const { currentContact } = useGlobalContext();

    return (
        <>
            {open &&
                <div className='backdrop'>
                    <div className='modal modal-confirm'>
                        <img
                            src={CloseIcon}
                            className="close-icon"
                            alt="close"
                            onClick={handleClose}
                        />

                        <h1>{title}</h1>
                        {/* <span>{subTitle + ` ${currentContact.nome}`}?</span> */}

                        <div className='container-buttons'>
                            <button
                                className='btn-green btn-confirm'
                                onClick={handleConfirm}
                            >
                                {textBtnConfirm}
                            </button>

                            <button
                                className='btn-red btn-cancel'
                                onClick={handleClose}
                            >
                                {textBtnCancel}
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ConfirmModal;