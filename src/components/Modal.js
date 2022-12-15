import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { LoginForm, SignInForm, SignUpForm } from "./Forms";

export function SignUpModalForm() {
	// const [signupText, setsignupText] = useState('')
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [loginOpened, setloginOpened] = useState(false);
	const [signupOpened, setsignupOpened] = useState(false);

	return (
		<>
			<button
				className="btn activeButton1 text-white"
				type="button"
				// data-bs-toggle="modal"
				// data-bs-target="#exampleModal"
				onClick={handleShow}>
				Join Us
			</button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Body className="formBg" closeButton>
					{/* <Modal.Header className="formBg pb-0" closeButton>
						<h2 className="whiteText text-center" closeButton>
							Sign Up
						</h2>
					</Modal.Header> */}
					<SignUpForm />

					{/* {active === "signin" && <LoginForm />}
					{active === "signup" && <SignUpForm />} */}
				</Modal.Body>
			</Modal>
		</>
	);
}

// export function SignInModalForm() {
// 	const [show, setShow] = useState(false);

// 	const handleClose = () => setShow(false);
// 	const handleShow = () => setShow(true);

// 	return (
// 		<>
// 			{/* <Button variant="primary" onClick={handleShow}>
// 				Launch demo modal
// 			</Button> */}

// 			{/* <button className="btn activeButton1 text-white" onClick={handleShow}>
// 				Login
// 			</button> */}

// 			<Modal show={show} onHide={handleClose}>
// 				{/* <Modal.Header className="formBg" closeButton>
// 					<Modal.Title>Modal heading</Modal.Title>
// 				</Modal.Header> */}
// 				<Modal.Body className="formBg" closeButton>
// 					<LoginForm />
// 				</Modal.Body>
// 				{/* <Modal.Footer>
// 					<Button variant="secondary" onClick={handleClose}>
// 						Close
// 					</Button>
// 					<Button variant="primary" onClick={handleClose}>
// 						Save Changes
// 					</Button>
// 				</Modal.Footer> */}
// 			</Modal>
// 		</>
// 	);
// }

// // export default Example;
