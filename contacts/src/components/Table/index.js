import { useState } from 'react';
import DeleteIcon from "../../assets/delete-icon.svg";
import EditIcon from "../../assets/edit.svg";
import ConfirmModal from '../ConfirmModal';
import EditContactsModal from '../EditContactsModal';
import './styles.css';


function Table() {
    const [openDelete, setOpenDelete] = useState();
    const [openEdit, setOpenEdit] = useState('');

    function handleCloseDelete() {
        setOpenDelete(false);
    }

    function handleConfirmDelete() {
        setOpenDelete(false);
    }

    function handleDeleteContact(contact) {
        setOpenDelete(true)
    }

    function handleEditContact(contact) {
        setOpenEdit(true)
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
                        <img 
                        src={EditIcon} 
                        alt="edit icon"
                        onClick={() => handleEditContact(1)}
                        />
                        <img
                            src={DeleteIcon}
                            alt="delete icon"
                            onClick={() => handleDeleteContact(1)}
                        />
                    </div>
                </div>

            </div>
            <ConfirmModal
                open={openDelete}
                handleClose={handleCloseDelete}
                title="Confirma a exclusão?"
                subTitle="Deseja excluir o contato Daniel Lopes?"
                textBtnConfirm="Excluir"
                textBtnCancel="Cancelar"
                handleConfirm={handleConfirmDelete}
            />
            <EditContactsModal
                open={openEdit}
                handleClose={() => setOpenEdit(false)}
            />
        </div>
    )
}

export default Table;