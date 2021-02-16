//componente con minutos por entrenamientos
import ListaMinutosEntr from './ListaMinutosEntr';
import GraficaMinutosEntr from './GraficaMinutosEntr';
const MinutosdEntrenamientos = () => { 
    return (
        <div id="minEntrenamientos">
        <ListaMinutosEntr/>
        <GraficaMinutosEntr/>
    </div>  
    );
}

export default MinutosdEntrenamientos