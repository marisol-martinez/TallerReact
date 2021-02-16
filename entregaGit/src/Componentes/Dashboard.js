import Menu from './Menu';
import AgregarEntrenamiento from './AgregarEntrenamiento';
import CantidadEntrenamientos from './CantidadEntrenamientos';
// import ComparacionPeso from './ComparacionPeso';
// import GraficaIMC from './GraficaIMC';
import InformacionPersonal from './InformacionPersonal';
import ListaEntrenamiento from './ListaEntrenamiento';
// import MinutosEntrenamiento from './MinutosEntrenamientos';

const Dashboard = () => { 
    return (
      <main>
          <InformacionPersonal/>
          <CantidadEntrenamientos/>
          <ListaEntrenamiento/>
      </main>
    );
}

export default Dashboard