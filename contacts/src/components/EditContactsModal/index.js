import { useEffect, useState } from "react";
import CloseIcon from '../../assets/close-icon.svg';
import useGlobalContext from "../../hooks/useGlobalContext";
import '../../styles/modal.css';
import './styles.css';
import api from '../../services/api'

function EditContactsModal({
    open,
    handleClose,
}) {
    const { currentContact, token, setContacts, contacts } = useGlobalContext();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (!name || !email || !phone) {
                return;
            }

            const response = await api.put(`/contatos/${currentContact.id}`,
                {
                    nome: name,
                    email: email,
                    telefone: phone
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            if (response.status > 204) {
                return;
            }

            const localContacts = [...contacts];

            const contactInEditingIndex = localContacts.findIndex((contact) => contact.id === currentContact.id)

            localContacts[contactInEditingIndex].nome = name;
            localContacts[contactInEditingIndex].email = email;
            localContacts[contactInEditingIndex].telefone = phone

            setContacts([...localContacts]);

            handleClose()

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (currentContact) {
            const { nome, email: emailContact, telefone } = currentContact;

            setName(nome);
            setEmail(emailContact)
            setPhone(telefone)
        }
    }, [currentContact])

    return (
        <>
            {open &&
                <div className='backdrop'>
                    <div className='modal modal-edit'>
                        <img
                            src={CloseIcon}
                            className="close-icon"
                            alt="close"
                            onClick={handleClose}
                        />

                        <h2>Editar Contato</h2>

                        <form className="form-edit" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Nome"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <input
                                type="text"
                                placeholder="E-mail"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                type="text"
                                placeholder="Telefone"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />

                            <div className='container-buttons'>
                                <button
                                    className='btn-green btn-confirm'
                                >
                                    Salvar
                                </button>

                                <button
                                    className='btn-red btn-cancel'
                                    onClick={handleClose}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default EditContactsModal;