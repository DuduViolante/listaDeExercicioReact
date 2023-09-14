import { Link } from "react-router-dom"

export default function Menu(){

    return(
        <nav>
            {/* Link especifico do router dom */}
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/produtos'>Aparelhos</Link>
            
        </nav>
    )
}