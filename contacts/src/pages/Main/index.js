import Header from '../../components/Header';
import Table from '../../components/Table';
import './styles.css';

function Main() {
  return (
    <div className="container-main">
      <Header/>
      <main>
        <button className="btn-green">
          Adicionar
        </button>
        <Table/>
      </main>
    </div>
  );
}

export default Main;
