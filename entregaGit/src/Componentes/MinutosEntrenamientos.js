//componente con minutos por entrenamientos
import ListaMinutosEntr from './Componentes/ListaMinutosEntr';
import GraficaMinutosEntr from './Componentes/GraficaMinutosEntr';
const MinutosdEntrenamientos = () => { 
    return (
        <div id="minEntrenamientos">
        <ListaMinutosEntr/>
        <GraficaMinutosEntr/>
    </div>  
    );
}

export default MinutosdEntrenamientos