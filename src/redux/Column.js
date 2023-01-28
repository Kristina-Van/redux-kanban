import React from 'react';
import {connect} from "react-redux";

const Column = (props) => {
    return (
            <div className="col">
               <h1>{props.status.title.toUpperCase()}</h1>
            </div>
    );
};


const mapStateToProps = (state) => ({
    tasks: state.tasks
});


export default connect(mapStateToProps) (Column);