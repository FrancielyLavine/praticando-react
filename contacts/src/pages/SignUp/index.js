import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundSingUp from '../../assets/background-singUp.svg';
import api from '../../services/api';
import './styles.css';

function SignUp() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (!name || !email || !password) {
                return
            }

            const response = await api.post('/usuarios', {
                nome: name,
                email: email,
                senha: password
            });

            if(response.status > 204) {
                return
            }

            navigate('/');

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='container-sign-up'>

            <div className='left-sign-up'>

                <h3>Cadastre-se</h3>

                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Nome'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        placeholder='E-mail'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type='submit'
                        className="btn-green"
                    >
                        Cadastrar
                    </button>
                    <button
                        type='button'
                        className="btn-red"
                    >
                        Cancelar
                    </button>
                </form>
                <span>Já tem cadastro?
                    <Link to="/">Clique aqui!</Link>
                </span>
            </div>
            <img src={BackgroundSingUp} alt='background' />
        </div>
    );
}

export default SignUp;
