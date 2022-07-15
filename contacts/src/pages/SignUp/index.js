import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundSingUp from '../../assets/background-singUp.svg';
import './styles.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='container-sign-up'>
           
            <div className='left-sign-up'>
                
                <h3>Cadastre-se</h3>

                <form>
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
