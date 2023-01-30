import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {createNewTask, updateTask} from "./redux/actions";

const ModalWindow = ({buttonLabel, title, priorities, statuses, addNewTask, task, editTask}) => {

    const [isOpen, setIsOpen] = useState(false);
    const selectStatuses = statuses.map(el => el.title);

    const initialTask = {name: '', description: '', priority: priorities[0], status: selectStatuses[0]};
    const initialTaskForUpdate = {name: task?.name, description: task?.description, priority: task?.priority, status: task?.status}

    const [newTask, setNewTask] = useState(title === 'Create new task' ? initialTask : initialTaskForUpdate);
    const toggle = () => {
        setIsOpen(!isOpen)
        setNewTask(title === 'Create new task' ? initialTask : initialTaskForUpdate)
    }

    const saveButtonHandler = () => {
        title === 'Create new task' ? addNewTask(newTask) : editTask(task._id, newTask);
        toggle();
    }

    return (

        <div>
            <Button className="btn btn-light" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Task name"
                               aria-describedby="basic-addon1"
                               value={newTask.name} onChange={(e) => setNewTask({...newTask, name: e.target.value})}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Description"
                               aria-describedby="basic-addon1"
                               value={newTask.description} onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Priority</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01"
                                value={newTask.priority} onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                        >
                            {priorities.map(el => <option value={el}>{el}</option>)}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Statuses</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01"
                                value={newTask.status} onChange={(e) => setNewTask({...newTask, status: e.target.value})}
                        >
                            {selectStatuses.map(el => <option value={el}>{el}</option>)}
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveButtonHandler}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => ({
    priorities: state.priorities,
    statuses: state.statuses
})

const mapDispatchToProps = (dispatch) => ({
    addNewTask: (newTask) => dispatch(createNewTask(newTask)),
    editTask: (id, newTask) => dispatch(updateTask(id, newTask))
})
export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
