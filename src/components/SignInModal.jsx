import React , { useState} from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import Google from '../assets/Social_Iconsgoogle.png'
import Facebook from '../assets/fb_logofacebook.png'

import './signupmodal.css'
import SignUpModal from './SignUpModal';

const SignInModal = ({isShow, closeModal, modalTitle}) => {
   const close = () => {
    closeModal()
   }

   const[show, setShow] = useState(false)

   const ToggleShow = () => {
       setShow(!show)
   }

    return (
      <>
        <Modal
          className='modal'
          show={isShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className='d-flex justify-content-between align-item-center '>
            <Modal.Title id="contained-modal-title-vcenter" className="mx-auto get-started">
              {modalTitle}
            </Modal.Title>
            <i onClick={close} class='bx bx-x'></i>
          </div>
          <Modal.Body className='mx-auto body'>
            <h4>Don't have an account?<button className='another' onClick={ToggleShow}>Sign up</button></h4>
            <button>
                <a className='targeted' href='#'>Login with Google <img src={Google} /></a>
            </button>
            <button className='second_btn'>
                <a className="targeted" href='#'>Login with Facebook <img src={Facebook} /></a>
            </button>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='label'>Email address</Form.Label>
                <Form.Control className='control' type="email" placeholder="Enter your email address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='label'>Password</Form.Label>
                <Form.Control className='control' type="password" placeholder="Enter password" />
              </Form.Group>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Save password
                </label>
              </div>
            </Form>
            <button className='sign-up' style={{background:'#BFDC36'}}><a href="#">Log in</a></button>
          </Modal.Body>
        </Modal>
        <SignUpModal isShow={show} closeModal={ToggleShow} modalTitle={'Get Started'} />
      </>
      );
    
}

export default SignInModal