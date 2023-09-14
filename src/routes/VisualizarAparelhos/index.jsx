import { useParams, useNavigate } from "react-router-dom"
// useParams pode passar 1 ou mais parametros (objeto)
import { listaAparelhos } from "../../components/VisualizarAparelhos"

export default function VisualizarAparelhos(){

    const lista = listaAparelhos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const produto = proc[0]

    const salvar = () => {
        alert(`Produto: ${aparelho.nome} editado com sucesso!`)
        return navegacao('/aparelho')
    }  
    return(
        <main>
            <h1>Visualizar Aparelhos</h1>
            <p>Visualizando o aparelho: {produto.nome}</p>
            <button onClick={salvar}>Salvar</button>
        </main>
    )
}