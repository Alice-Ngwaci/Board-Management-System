
//MDB bootstrap
import {
  MDBContainer,
  MDBCardImage,
  MDBRow,
  MDBCol,

}
from 'mdb-react-ui-kit';

import app from  '../assets/images/app.png'
import { Landing } from '@/components/landing'
import { Hero } from '@/components/hero'

export default function HomePage() {
  return (
    <Landing>
    <MDBContainer className="my-3" >

      <MDBRow className='g-0'>

        <MDBCol md='6' style={{padding:20}}>

        <Hero
        title ="MicroFinance"
        content="Leading workforce in 2023."
        />

        </MDBCol>
 
        <MDBCol md='6' style={{padding: '10px', zIndex: '100'}}>
          <MDBCardImage   src={app} alt="" style={{marginLeft: '100px'}} className='rounded-start h-90 ml-5'/>
        </MDBCol>

      </MDBRow>

  </MDBContainer>
  </Landing>
  
  
  )
}
