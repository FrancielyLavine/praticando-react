import { useState } from "react";
import CloseIcon from '../../assets/close-icon.svg';
import useGlobalContext from '../../hooks/useGlobalContext';
import api from '../../services/api';
import '../../styles/modal.css';
import './styles.css';

function AddContactsModal({
    open,
    handleClose,
}) {
    const { token, setContacts, contacts } = useGlobalContext();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleClear() {
        setName('');
        setEmail('');
        setPhone('');
    }
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/contatos', 
            {
                nome: name,
                telefone: phone,
                email: email
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            if (response.status > 204) {
                return;
            }

            setContacts([...contacts, ...response.data]);

            handleClear();
            handleClose();

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            {open &&
                <div className='backdrop'>
                    <div className='modal modal-add'>
                        <img
                            src={CloseIcon}
                            className="close-icon"
                            alt="close"
                            onClick={handleClose}
                        />

                        <h2>Novo Contato</h2>

                        <form className="form-add" onSubmit={handleSubmit}>
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
                                    Adicionar
                                </button>

                                <button
                                    className='btn-red btn-cancel'
                                    onClick={handleClear}
                                >
                                    Limpar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default AddContactsModal;