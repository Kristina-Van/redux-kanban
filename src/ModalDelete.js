import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {deleteTask} from "./redux/actions";


const ModalDelete = (props) => {

    const {task, deleteT} = props;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const deleteButtonHandler = () => {
        deleteT(task._id)
        toggle()
    }

    return (

        <div>
            <button className="btn btn-light" onClick={toggle}>Delete</button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{task.name}</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteButtonHandler}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    deleteT: (id) => dispatch(deleteTask(id))
})
export default connect(null, mapDispatchToProps)(ModalDelete);
