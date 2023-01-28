import './App.css';
import {getStatuses, getTasks} from "./redux/actions";
import {connect} from "react-redux";
import {useEffect} from "react";
import Column from "./redux/Column";
import 'bootstrap/dist/css/bootstrap.css';

function App(props) {

    useEffect(() => {getStatuses(); getTasks()}, []);

    return (
        <div className="App">
            <h1>KANBAN BOARD</h1>
            <div className="container">
                <div className="row align-items-start">
                    {props.statuses.map(el => <Column status={el}
                                                      key={el._id}/>)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    statuses: state.statuses
})
const mapDispatchToProps = (dispatch) => ({
    getStatuses: () => dispatch(getStatuses()),
    getTasks: () => dispatch(getTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
