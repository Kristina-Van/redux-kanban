import React from 'react';
import {changePriority} from "./actions";
import {connect} from "react-redux";

const Task = (props) => {
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
                <button className="btn btn-light">Update</button>
                <button className="btn btn-light">Delete</button>
                <button className="btn btn-info">←</button>
                <button className="btn btn-info">→</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    changePriority: (id, newPriority) => dispatch(changePriority(id, newPriority))
})
export default connect(null, mapDispatchToProps)(Task);