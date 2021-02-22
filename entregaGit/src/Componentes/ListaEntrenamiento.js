import EliminarEntrenamiento from "./EliminarEntrenamiento"

//contenedor de lista de entrenamientos
const ListaEntrenamiento = () => {
               
        return (
        <div id="listaEntrenamientos">
            <table>
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
                    <EliminarEntrenamiento/>
                </tr>
                <tr>
                    <td>Pesas</td>
                    <td>60</td>
                    <td>300</td>
                    <EliminarEntrenamiento/>
                </tr>
                <tr>
                    <td>Pesas</td>
                    <td>60</td>
                    <td>300</td>
                    <EliminarEntrenamiento/>
                </tr>
                <tr>
                    <td>Pesas</td>
                    <td>60</td>
                    <td>300</td>
                    <EliminarEntrenamiento/>
                </tr>
                <tr>
                    <td>Pesas</td>
                    <td>60</td>
                    <td>300</td>
                    <EliminarEntrenamiento/>
                </tr>
                <tr>
                    <td>Pesas</td>
                    <td>60</td>
                    <td>300</td>
                    <EliminarEntrenamiento/>
                </tr>
            </table>
        </div>
    )
}

export default ListaEntrenamiento