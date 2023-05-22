
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
        content="Our landing page template works for all the devices, so you only have to setup it once, and get beautiful results forever."
        />

        </MDBCol>
 
        <MDBCol md='6' style={{padding: '10px', zIndex: '100'}}>
          <MDBCardImage   src={app} alt="" className='rounded-start h-90 ml-5'/>
        </MDBCol>

      </MDBRow>

  </MDBContainer>
  </Landing>
  
  
  )
}
