import './styles.css';

function ConfirmModal({
    open,
    handleClose,
    title,
    subTitle,
    textBtnConfirm,
    textBtnCancel,
    handleConfirm
}) {
    return (
        <div className="backdrop">
            <div className="modal">
                <h1>{title}</h1>
                <span>{subTitle}</span>

                <button className="btn-green">
                    {textBtnConfirm}
                </button>

                <button className="btn-red">
                    {textBtnCancel}
                </button>
            </div>
        </div>
    )
}
export default ConfirmModal;