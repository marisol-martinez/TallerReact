//contenedor de lista de entrenamientos
import Entrenamiento from "./Entrenamiento"

const ListaEntrenamiento = ({entrenamiento}) => { //{enrenamiento} = props //props es un obj, que tiene una propiedad enrenamiento
    return (
        <div className="entremiento">
            {entrenamiento.map(t => <Entrenamiento key={t.id} {...t}/>)}
        </div>
    )
}

export default ListaEntrenamiento