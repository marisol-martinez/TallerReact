import EliminarEntrenamiento from "./EliminarEntrenamiento"

const Entrenamiento = ({nombre}) => {
    return (
        <tr>
            <td>Correr</td>
            <td>30</td>
            <td>500</td>
            <EliminarEntrenamiento/>
        </tr>
    )
}

export default Entrenamiento;