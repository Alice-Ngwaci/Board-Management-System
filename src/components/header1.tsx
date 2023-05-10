import { Link } from 'react-router-dom'

import { Logo } from './logo'

import {
  MDBIcon,
} from 'mdb-react-ui-kit';

export function Header({ title }: { title?: string }) {
  return (
    <header className="relative py-6">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h3 className="m-0 text-xl font-bold uppercase leading-none" >
            <Link to="/" className="flex items-center no-underline" style={{color: '#303030'}}>
              <Logo className="mr-3" /> MHASIBU SACCO
            </Link>
          </h3>
          
          <h5 className="m-0 ml-5 text-xl font-bold uppercase leading-none " 
          style={{zIndex: 1000,backgroundColor: '#303030', padding: 15, color: "#fff", borderRadius: 4, width: '10%'}}>
            
            <Link to="/login" className="flex items-center no-underline text-white" style={{fontSize: 15}}>
            <MDBIcon fas icon="sign-in-alt" className="me-2" />  Login 
            </Link>
          </h5>
        </div>
      </div>
    </header>
  )
}
