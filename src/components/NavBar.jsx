
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <nav className='border-b border-gray-800 bg-slate-700'>
     <div className='container flex items-center justify-between py-4 mx-auto'>
          <Link to='/'>Home</Link>
          
          <ul className='flex items-center justify-between gap-10'>
              <li>
                <Link className='px-4 py-2' to='/players'>Players</Link>
              </li>
              <li>
                <Link className='px-4 py-2' to='/teams'>Teams</Link>
              </li>
          </ul>
          
      </div> 
   </nav>    
  )
}

export default NavBar


