import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="Header">
            <h1>Awards For You!</h1>
            <nav>
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/layout">Home</Link></li>
                    <li><Link to="user">Users</Link></li>
                    <li><Link to="post">Add Post</Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header