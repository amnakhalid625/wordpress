import logoImage from '../../../public/logo_new.png'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="parent_navbar">
   <div className="logo"> 
<img src={logoImage} alt="" />

   </div>
   <div className="nav_links">
    <li>menu</li>
    <li>location</li>
    <li>about</li>
    <li>contact</li>
   </div>
   <div className="nav_button">
    <button>Login</button>
   </div>
   </div>
   </>
  )
}

export default Navbar