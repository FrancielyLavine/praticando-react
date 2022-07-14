import './styles.css';
import BackgroundSingIn from '../../assets/background.svg';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='container-sign-in'>
            <img src={BackgroundSingIn} alt='background' />
            <div className='right-sign-in'>
                <span>Bem vindo</span>
                <h1>Faça o login com sua conta</h1>

                <form>
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
