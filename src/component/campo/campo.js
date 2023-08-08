import './campo.css'

const Campo = (props) => {

    const placeholderModific = (`${props.placeholder}.`)
    const { type = 'text' } = props
    
    const actualizarValor = (e)=>{
        props.actualizarvalor(e.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{props.Titulo.toUpperCase()}</label>
            <input 
                placeholder={placeholderModific} 
                required={props.required}
                value={props.valor}
                onChange={actualizarValor}
                type={type}
            />
        </div>
    );
}

export default Campo;
