//contenedor de lista de entrenamientos
import Entrenamiento from "./Entrenamiento"

const ListaEntrenamiento = ({entrenamiento}) => { //{enrenamiento} = props //props es un obj, que tiene una propiedad enrenamiento
   
        /* <div className="entremiento">
            {entrenamiento.map(t => <Entrenamiento key={t.id} {...t}/>)}
        </div> */ 
               
        return (
        <div id="listaEntrenamientos">
        <table style="width:100%">
            <tr>
                <td>Entrenamiento</td>
                <td>Minutos</td>
                <td>Kcal quemadas</td>
                <td></td>
            </tr>
            <tr>
                <td>Correr</td>
                <td>30</td>
                <td>500</td>
                <td>
                    <button>
                        <i data-feather="trash-2"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Pesas</td>
                <td>60</td>
                <td>300</td>
                <td>
                    <button>
                        <i data-feather="trash-2"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Pesas</td>
                <td>60</td>
                <td>300</td>
                <td>
                    <button>
                        <i data-feather="trash-2"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Pesas</td>
                <td>60</td>
                <td>300</td>
                <td>
                    <button>
                        <i data-feather="trash-2"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Pesas</td>
                <td>60</td>
                <td>300</td>
                <td>
                    <button>
                        <i data-feather="trash-2"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Pesas</td>
                <td>60</td>
                <td>300</td>
                <td>
                    <button>
                        <i data-feather="trash-2"></i>
                    </button>
                </td>
            </tr>
        </table>
        </div>
    )
}

export default ListaEntrenamiento