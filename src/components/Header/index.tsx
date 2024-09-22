import { Link } from 'react-router-dom';
import './styles.css';



export default function Header(){
    return(
        <header>
            <div className='container'>
                <h1><Link to={"/"}>Github API</Link></h1> 
            </div>
        </header>
    );
}