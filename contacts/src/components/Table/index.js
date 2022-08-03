import { useEffect, useState } from 'react';
import DeleteIcon from "../../assets/delete-icon.svg";
import EditIcon from "../../assets/edit.svg";
import useGlobalContext from '../../hooks/useGlobalContext';
import ConfirmModal from '../ConfirmModal';
import EditContactsModal from '../EditContactsModal';
import './styles.css';
import api from '../../services/api'


function Table() {
    const { token, contacts, setContacts, setCurrentContact, currentContact} = useGlobalContext()
    const [openDelete, setOpenDelete] = useState();
    const [openEdit, setOpenEdit] = useState('');


    function handleCloseDelete() {
        setOpenDelete(false);
    }

    async function handleConfirmDelete() {
        try {
            const response = await api.delete(`/contatos/${currentContact.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status > 204) {
                return;
            }

            const localContacts = [...contacts];

            const contactToDeleteIndex = localContacts.findIndex((contact) => contact.id === currentContact.id);

            localContacts.splice(contactToDeleteIndex, 1);

            setContacts([...localContacts]);

        } catch (error) {
            console.log(error);
        } finally {
            setOpenDelete(false);
        }
    } 

   function handleDeleteContact(contact) {
        setCurrentContact(contact);
        setOpenDelete(true);
    }

    function handleEditContact(contact) {
        setCurrentContact(contact);
        setOpenEdit(true)
    }

    useEffect(() => {
        async function loadContacts() {
            try {
                const response = await api.get('/contatos', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status > 204) {
                    return;
                }

                setContacts([...response.data]);

            } catch (error) {
                console.log(error)
            }
        }
        loadContacts();
    }, []);

    return (
        <div className="container-table">
            <div className="table-header">
                <strong>Nome</strong>
                <strong>Email</strong>
                <strong>Telefone</strong>
                <div></div>
            </div>

            <div className="table-body">
                {contacts.map((contact) => (
                    <div className="table-row" key={contact.id}>

                        <span>{contact.nome}</span>
                        <span>{contact.email}</span>
                        <span>{contact.telefone}</span>
                        <div className="container-action-buttons">
                            <img
                                src={EditIcon}
                                alt="edit icon"
                                onClick={() => handleEditContact(contact)}
                            />
                            <img
                                src={DeleteIcon}
                                alt="delete icon"
                                onClick={() => handleDeleteContact(contact)}
                            />
                        </div>
                    </div>
                ))}

            </div>
            <ConfirmModal
                open={openDelete}
                handleClose={handleCloseDelete}
                title="Confirma a exclusão?"
                subTitle="Deseja excluir o contato"
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