import { useState } from 'react';
import AddContactsModal from '../../components/AddContactsModal';
import EditContactsModal from '../../components/EditContactsModal';
import Header from '../../components/Header';
import Table from '../../components/Table';
import './styles.css';

function Main() {
  const [openAdd, setOpenAdd] = useState('');
  // const [openEdit, setOpenEdit] = useState('');
  return (
    <div className="container-main">
      <Header/>
      <main>
        <button 
        className="btn-green"
        onClick={() => setOpenAdd(true)}
        >
          Adicionar
        </button>
        <Table/>
      </main>
      <AddContactsModal
        open={openAdd}
        handleClose={() => setOpenAdd(false)}
      />
      
    </div>
  );
}

export default Main;
