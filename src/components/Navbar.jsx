import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

const  Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">QuickNews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
            </ul>

            {/* Search form */}
            <form className="d-flex ms-auto mx-4" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-danger" type="submit">Search</button>
            </form>

            {/* LinkedIn and GitHub Icons */}
            <div className="d-flex align-items-center mx-2">
              <a href="https://www.linkedin.com/in/anand44xy" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/anand44xy" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
