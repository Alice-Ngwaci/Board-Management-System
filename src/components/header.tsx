import { Link } from 'react-router-dom'
import { NavLinks } from './nav-links'
import { useNavigate } from 'react-router-dom'

//firebase

import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useAuth } from '../context-stores/authcontext';

import { Logo } from './logo'

import {
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';


export function Header({ title }: { title?: string }) {

  const navigate = useNavigate()
  const { setUser_data } = useAuth();

  const logout = () => {
    signOut(auth);
    setUser_data();
    navigate('/');
 }

  return (
    <header className="relative py-6">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h3 className="m-0 text-xl font-bold uppercase leading-none" >
            <Link to="/" className="flex items-center no-underline" style={{color: '#303030'}}>
              <Logo className="mr-3" /> MHASIBU SACCO
            </Link>
          </h3>

          <div>
          <NavLinks className="p ml-5 mt-2 mb-6 inline-flex w-full flex-none justify-center lg:order-1 lg:mb-0 lg:flex lg:w-1/2 lg:justify-end" 
          />
          <MDBBtn className="mb-1 " color='dark' size='sm' style={{fontWeight: "bold", borderRadius: 4, marginLeft: '-10%', fontSize: 10, position: 'relative'}} onClick={logout}>
            <MDBIcon fas icon='sign-out-alt'  /> 
              LogOut
          </MDBBtn>
          </div>
          
        
        </div>
      </div>
    </header>
  )
}
