import EliminarEntrenamiento from "./EliminarEntrenamiento"

const Entrenamiento = ({entr}) => {
    const caloriasQuemadas = (entrenamiento) =>{
        // let tipo = tiposEntrenamiento.find(t => (t.id === entrenamiento.trainnning_type));
        // return entrenamiento.minutes * tipo.calories_per_minute;
    }

    return (
        <tr>
            <td>{entr.id}</td>
            <td>{entr.trainning_type}</td>
            <td>{entr.minutes}</td>
            <td>{caloriasQuemadas(entr)}</td>
            <EliminarEntrenamiento/>
        </tr>
    )
}

export default Entrenamiento;