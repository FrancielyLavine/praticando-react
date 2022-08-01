import { useState } from "react";
import CloseIcon from '../../assets/close-icon.svg';
import '../../styles/modal.css';
import './styles.css';

function EditContactsModal({
    open,
    handleClose,
}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

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

                        <fomr className="form-edit">
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
                        </fomr>

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
                    </div>
                </div>
            }
        </>
    )
}

export default EditContactsModal;