import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import UpdateSalary from "./UpdateSalary";
// import UpdateDepartment from "./UpdateDepartment";
const Modle = (props) => {
  console.log(props.salDet)
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
        <UpdateSalary
          salDet={props.salDet}
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