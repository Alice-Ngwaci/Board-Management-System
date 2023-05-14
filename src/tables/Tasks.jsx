import React, {useEffect, useState} from 'react'
import { people } from '../data/Data';
import Select from 'react-select';

import {

  MDBIcon,

  MDBContainer,
  MDBCard,
  MDBCardBody,

  //Modal

  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBBtn
   
  } from 'mdb-react-ui-kit';

  const options = [
    { value: 'Information Technology', label: 'Information Technology' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Human Resource', label: 'Human Resource' },
  ];

//Global Data

import { useGlobalContext } from '../context/context'

//Components

import Alert from '../components/alert';


export default function Tasks() {

  //alerts

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
    icon: '',
    })
  
    const showAlert = (show = false, type = '', icon = '', msg = '') => {
    setAlert({ show, type, icon, msg })
    }
     
    //Global Context

    const { assignTask } = useGlobalContext()

    //Modal
    
    const [centredModal3, setCentredModal3] = useState(false)
    const toggleShow3 = () => setCentredModal3(!centredModal3)

    //Input
    const [selectedOption, setSelectedOption] = useState(null);

    //Folder click

    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedName, setSelectedName] = useState(null)
    const [selectedEmail, setSelectedEmail] = useState(null)
    const [selectedTitle, setSelectedTitle] = useState(null)
    const [selectedDetails, setSelectedDetails] = useState(null)
    const [selectedUserId, setSelectedUserId] = useState(null)
  

    const handleRowClick = (people) => {

      setSelectedItem(people)
      setSelectedUserId(people.id)
      setSelectedName(people.name)
      setSelectedTitle(people.title)
      setSelectedDetails(people.details)
      setSelectedEmail(people.email)
 

      toggleShow3()
    }


    //Assign Task

    const number = Math.floor(Math.random() * 100000000);

    const Start = () =>{

      if ( !selectedOption ) {
        showAlert(true, 'danger', 'info-circle', 'Select Department')
      }else {

        const Item = {

          id: number,
          name: selectedName,
          title: selectedTitle,
          details: selectedDetails,
          department: selectedOption.value,
          email: selectedEmail,
   
        }
        assignTask(Item);

        showAlert(true, 'success', 'info-circle', 'Task Assigned')
       
        setTimeout(() => {!toggleShow3()}, 2000)

      }

    }
    
  return (
    <div>

      <MDBContainer className="my-1" width="100px" >
      
      <MDBCard style={{width: '600px', marginLeft: '50px'}}>
     
            <MDBCardBody>

            <div className='d-flex flex-row mt-1 mb-3' style={{fontSize: 10}}>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="p fw-bold mt-2">MHASIBU SACCO</span>
              </div>

              {people.map((person) => (
              <>
  
                <MDBIcon  fas icon="folder" className="me-5 mt-3  " key = {person.id} size="2x" style={{cursor: 'pointer'}}  onClick={() => handleRowClick(person)}>
                <p>{person.id}</p>_______
                </MDBIcon>
  
              </>
              ))}

            <h5 className="fw-normal my-4 pb-3 mt-3 " style={{letterSpacing: '1px'}}></h5>

            </MDBCardBody>

      </MDBCard>

      </MDBContainer>

    {/* Request Modal */}

    <>
    {selectedItem && (
    <MDBModal
      tabIndex="-1"
      show={centredModal3}
      setShow={setCentredModal3}
    >
      <MDBModalDialog centered>
        <MDBModalContent style={{padding: 25}}>
          <MDBModalHeader className='mb-3'>
            <MDBModalTitle>
              <MDBIcon
                fas
                icon="folder-open text-success"
                className="me-2"
              />{' '}
              Assign Task
            </MDBModalTitle>
        
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow3}
              style={{
                fontSize: 10,
                fontWeight: 'bold',
                
              }}
            ></MDBBtn>
          </MDBModalHeader>

          {alert.show && <Alert {...alert} removeAlert={showAlert} />}

          <MDBModalBody>
            <div>
          
              <h5
                className="fw-normal  mb-4"
                style={{ letterSpacing: '1px' }}
              >
                Client_Name: {selectedItem.name}
              </h5>

              <h5
                className="fw-normal  mb-4"
                style={{ letterSpacing: '1px' }}
              >
                Title: {selectedItem.title}
              </h5>

              <h5
                className="fw-normal  mb-4"
                style={{ letterSpacing: '1px' }}
              >
                Details: {selectedItem.details}
              </h5>

              <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              />

              <MDBBtn
                className="mt-4 px-10"
                color="info"
                size="lg"
                style={{ fontWeight: 'bold', width: '60%' }}
                onClick={() => {
                  Start()
                }}
              >
                Assign Task
              </MDBBtn>
            </div>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    )}
    </>
        
    </div>
    
  )
}
