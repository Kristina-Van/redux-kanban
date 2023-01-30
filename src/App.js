import './App.css';
import {getStatuses, getTasks} from "./redux/actions";
import {connect} from "react-redux";
import {useEffect} from "react";
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.css';
import ModalWindow from "./ModalWindow";

function App(props) {

    useEffect(() => {props.getStatuses(); props.getTasks()}, []);

    return (
        <div className="App">
            <h1>KANBAN BOARD</h1>
            <div className="container">
                <ModalWindow
                    buttonLabel={'Add'}
                    title={'Create New Task'}
                />
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
