import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundSingIn from '../../assets/background.svg';
import useGlobalContext from '../../hooks/useGlobalContext';
import api from '../../services/api';
import './styles.css';

function SignIn() {
    const navigate = useNavigate();

    const { token, setToken, setUser } = useGlobalContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await api.post('/login', {
                email: email,
                senha: password
            });

            if (response.status > 204) {
                return;
            }

            const { usuario, token } = response.data;

            navigate('/main')

            setToken(token);
            setUser(usuario);
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/main');
        }
    }, [])


    return (
        <div className='container-sign-in'>
            <img src={BackgroundSingIn} alt='background' />
            <div className='right-sign-in'>
                <span>Bem vindo</span>
                <h1>Faça o login com sua conta</h1>

                <form onSubmit={handleSubmit}>
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
                        Login
                    </button>
                </form>
                <span>Não tem cadastro?
                    <Link to="/sign-up">Clique aqui!</Link>
                </span>
            </div>
        </div>
    );
}

export default SignIn;
