import {useState} from 'react'

export default function Form() {
    const [dados, setDados] = useState({
        categoria : "",
        nome : ""
    })

    function handleChange({target}) {
        const {id, value} = target
        setDados({...dados, [id] : value})
        console.log(dados)
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:4000/cad', {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(dados)
        })
    }

    return (
        <div className="container-sm">
        <form onSubmit={handleSubmit}>
            <label htmlFor="categoria" className="text-uppercase">Categoria </label>
            <select id="categoria" onChange={handleChange} name="categoria" className="form-select">
                <option value="">selecione</option>
                <option value="fps">FPS</option>
                <option value="familia">Familia</option>
                <option value="aventura">Aventura</option>
                <option value="esportes">Esportes</option>
            </select>
            <div className="input-group mb-3">
            <input type="text" className="form-control" name="nome" id="nome" onChange={handleChange} placeholder="Insira o nome do jogo" />
            <input className="btn btn-outline-secondary" type="submit" value="cadastrar" />
            </div>
        </form>
        </div>
    )
}