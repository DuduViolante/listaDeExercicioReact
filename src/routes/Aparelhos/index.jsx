import { Link } from "react-router-dom"
import { listaProdutos } from "../../components/listaAparelhos"

export default function Produtos(){

    return(
        <main>
            <h1>Aparelhos</h1>
            {listaAparelhos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/aparelhos/visualizar/${prod.id}`}>
                        Visualizar aparelho: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    )
}