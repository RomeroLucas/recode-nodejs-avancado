
export default function Produto(props) {
    
    return(
        <span className="container-sm">
            <ul className="list-group">
            
                    <li className="list-group-item list-group-item-action active">nome: {props.dados.nome}</li>
                    <li className="list-group-item list-group-item-action">Categoria: {props.dados.categoria}</li>
                    <li className="list-group-item list-group-item-action">valor: R$ {props.dados.valor}</li>
            </ul>
        </span>
    )
}