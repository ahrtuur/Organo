import "./CampoTexto.css"

const CampoTexto = (props) => { 
    console.log(props.label)
    return (
        <div className="campo-texto">
            <label>
                {props.log}
            </label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto