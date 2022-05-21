import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import UpdateEmployee from "./UpdateEmployee";
// import UpdateDepartment from "./UpdateDepartment";
const Modle = (props) => {
  console.log(props.empDet)
  // console.log(props.depDet)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <UpdateEmployee 
          empDet={props.empDet}
        />
        {/* <UpdateDepartment
          depDet={props.depDet}
        /> */}
       
        
      </ModalBody>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default Modle;