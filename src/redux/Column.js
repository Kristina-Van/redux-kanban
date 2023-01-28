import React from 'react';
import {connect} from "react-redux";
import Task from "./Task";

const Column = (props) => {
    return (
            <div className="col">
               <h1>{props.status.title.toUpperCase()}</h1>
                {props.tasks.filter(el => el.status === props.status.title).map(el =>
                    <Task task = {el}
                          key={el._id}
                />)}
            </div>
    );
};


const mapStateToProps = (state) => ({
    tasks: state.tasks
});


export default connect(mapStateToProps) (Column);