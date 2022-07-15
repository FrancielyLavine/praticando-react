import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path = '/main' element={<Main/>}/>
        </Routes>
    )
}

export default MainRoutes;