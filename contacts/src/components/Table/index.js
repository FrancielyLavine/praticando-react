import './styles.css';
import DeleteIcon from "../../assets/delete-icon.svg";
import EditIcon from "../../assets/edit.svg";
import ConfirmModal from '../ConfirmModal';
import { useState } from 'react'


function Table() {
    const [open, setOpen] = useState();

    function handleClose() {
        setOpen(false);
    }

    function handleConfirm() {
        setOpen(false);
    }

    function handleDeleteContact(contact) {
        setOpen(true)
    }

    return (
        <div className="container-table">
            <div className="table-header">
                <strong>Nome</strong>
                <strong>Email</strong>
                <strong>Telefone</strong>
                <div></div>
            </div>

            <div className="table-body">
                <div className="table-row">
                    <span>Daniel</span>
                    <span>daniel@cubos.com</span>
                    <span>18 9999-0000</span>
                    <div className="container-actions-buttons">
                        <img src={EditIcon} alt="edit icon" />
                        <img
                            src={DeleteIcon}
                            alt="delete icon"
                            onClick={() => handleDeleteContact(1)}
                        />
                    </div>
                </div>

            </div>
            <ConfirmModal
                open={open}
                handleClose={handleClose}
                title="Confirma a exclusão?"
                subTitle="Deseja excluir o contato Daniel Lopes?"
                textBtnConfirm="Excluir"
                textBtnCancel="Cancelar"
                handleConfirm={handleConfirm}
            />
        </div>
    )
}

export default Table;