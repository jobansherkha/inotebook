import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'

export default function Navbar() {

const history = useNavigate()

// using the uselocation hook 
    let location = useLocation();

    React.useEffect(() => {
        console.log(location)

  }, [location]);

  const Logout = ()=>{
    localStorage.removeItem('token')

    history("/login")


  }
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {" "}
              INotebook - {" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to ="/"className={`nav-link ${location.pathname == "/" ? "active": ""}`} aria-current="page"  >
                    Home
                  </Link>
                </li>
                <li className="nav-item"><Link to ="/About" className={`nav-link ${location.pathname == "/About" ? "active": ""}`} >
                  About
                </Link> </li>
                
               
                
              </ul>
             {!localStorage.getItem('token')? <ul className="nav navbar-nav navbar-right">
                
      <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>:<button type="submit" className="btn btn-primary" onClick={Logout}>
          Logout
        </button> }
            </div>
          </div>
        </nav>
      </div>
  )
}
