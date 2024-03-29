import { connect } from "react-redux";

const InformacionPersonal = (props) => {

    let usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
    const imc = (peso) => {
        let alturaMetrosAlCuadrado = (usuario.height / 100) * (usuario.height / 100)
        return peso / alturaMetrosAlCuadrado;
    }

    let mensaje = (imc) => {
        switch (true) {
            case imc < 18.5:
                return "Bajo peso";
            case imc >= 18.5 && imc <= 24.9:
                return "Peso saludable";
            case imc >= 25 && imc <= 29.9:
                return "Sobrepeso";
            case imc >= 30:
                return "Obesidad";
            default:
                return "Peso no valido";
        }
    }

    const peso = props.listaDeEntrenamientos.length > 0 ? [props.listaDeEntrenamientos[0].weight] : 0;

    return (
        <div id="bienvenida">
            <p>Información personal</p>
            <p>Último peso ingresado: <span>{peso}kg</span></p>
            <p>Altura: <span>{usuario.height}cm</span></p>
            <p>Índice de masa corporal: <span>{imc(peso).toFixed(2)}</span></p>
            <p>Estado actual: <span id="mensaje">{mensaje(imc(peso))}</span></p>
        </div>
    );
}

const mapStateToProps = (state) => ({
    listaDeEntrenamientos: state.listaDeEntrenamientos,
});

export default connect(mapStateToProps)(InformacionPersonal)