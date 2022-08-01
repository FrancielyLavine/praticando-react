import { useState } from "react";
import { useLocalStorage } from "react-use";

function useGlobalContextProvider(){
    const [token, setToken, clearToken] = useLocalStorage('token');
    const [user, setUser, clearUser] = useLocalStorage('user');
    const [contacts, setContacts] = useState([]);
    const [currentContact, setCurrentContact, clearCurrentContact] = useLocalStorage('current_contact');

    return{
        token,
        setToken,
        clearToken,
        user,
        setUser,
        clearUser,
        contacts,
        setContacts,
        currentContact,
        setCurrentContact,
        clearCurrentContact
    }
}

export default useGlobalContextProvider;