import { NavLink } from 'react-router-dom'
import { auth } from  '../firebase/firebaseConfig';
import { useState } from "react";

const NAV_LINKS = [

  { name: 'Account', to: '/account' },
]

const NAV_LINK = [
  {name: 'Dashboard', to: '/dashboard'}
]

export function NavLinks({ className }: { className?: string }) {

  const [isAdmin, setIsAdmin] = useState(() => {
    if (auth.currentUser.email  === "admin@gmail.com") {
        return true;
    }
    return false;
    

  });

  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="ml-4">
          <NavLink
            to={link.to}
            style={{fontWeight: 900}}
            className={({ isActive }) =>
              isActive ? 'border-b text-white' : 'text-white hover:border-b'
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}

     {isAdmin ?(
      <>
      {NAV_LINK.map((link) => (
        <li key={link.name} className="ml-4">
          <NavLink
            to={link.to}
            style={{fontWeight: 900}}
            className={({ isActive }) =>
              isActive ? 'border-b text-white' : 'text-white hover:border-b'
            }
            
          >
            {link.name}
          </NavLink>
         
        </li>
      ))}
      </>):null}
    </ul>
  )
}
