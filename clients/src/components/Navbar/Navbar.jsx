import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'
import logo from '../../assets/logo.png'
import search from '../../assets/search-icon.svg'
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';


export const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // var User = JSON.parse(localStorage.getItem('Profile'))
  // console.log(User.result.name.charAt(0))
  var User = useSelector((state) => (state.currentUserReducer))
  // console.log(User)
  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    const token = User?.token
    if(token){
      const decoderToken = decode(token)
      if(decoderToken.exp * 1000 < new Date().getTime()){
        handleLogout()
      }  
      }
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])



  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-btn'>
          <img src={logo} className='stack-logo' alt='logo' />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Reams</Link>
        <form>
          <input type='text' placeholder='search...' />
          <img src={search} alt="search" className='search-icon' width={18} />
        </form>
        {User === null ?

          <Link to='/Auth' className='nav-item nav-links'>log in</Link> :
          <>
            <Avatar backgroundColor='#009dff' px="13px" py="7px" borderRadius='50%' color='white'><Link to={`/Users/${User.result?._id}`} style={{ color: "white", textDecoration: "none" }}>{User.result.name.charAt(0)}</Link></Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
          </>



        }
      </div>
    </nav>


  )
}
export default Navbar;