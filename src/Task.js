import React from 'react';
import {changePriority, changeStatus} from "./redux/actions";
import {connect} from "react-redux";
import ModalWindow from "./ModalWindow";
import ModalDelete from "./ModalDelete";

const Task = (props) => {

    const moveButtonHandler = (direction) => {
        const currentIndex = props.statusesArr.indexOf(props.task.status);
        const newStatus = props.statusesArr[currentIndex + direction];
        props.moveTask(props.task._id, newStatus)
    }

    return (
        <div className="card">
            <h5 className="card-header">{props.task.name}</h5>
            <div className="card-body">
                <h5 className="card-title">{props.task.description}</h5>
                <p className="card-text">{props.task.priority}
                    <button onClick={() => props.changePriority(props.task._id, +props.task.priority + 1).toString()}
                            className="btn btn-info">↑
                    </button>
                    <button onClick={() => props.changePriority(props.task._id, +props.task.priority - 1).toString()}
                            className="btn btn-info">↓
                    </button>
                </p>
                <p className="card-text">{props.task.status}</p>
                <ModalWindow className="btn btn-light" buttonLabel={'Update'} title={'Update task'} task={props.task}/>
                <ModalDelete task={props.task}/>
                <button disabled={props.task.status === props.statusesArr[0]}
                    onClick={() => moveButtonHandler(-1)}
                        className="btn btn-info">←
                </button>
                <button disabled={props.task.status === props.statusesArr[props.statusesArr.length -1]}
                    onClick={() => moveButtonHandler(1)}
                        className="btn btn-info">→
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    statusesArr: state.statuses.map(el => el.title)
})
const mapDispatchToProps = (dispatch) => ({
    changePriority: (id, newPriority) => dispatch(changePriority(id, newPriority)),
    moveTask: (id, newStatus) => dispatch(changeStatus(id, newStatus))
})
export default connect(mapStateToProps, mapDispatchToProps)(Task);
