import axios from "axios";

export function getStatuses () {
    return (dispatch) => {
        axios.get('https://expressjs-server.up.railway.app/statuses')
            .then((res) => dispatch({type: 'GET_STATUSES', payload: res.data}))
            .catch((error) => console.log(error))
    }
}

export function getTasks(){

        return (dispatch) => {
            axios.get('https://expressjs-server.up.railway.app/tasks')
                .then((res) => dispatch({type: 'GET_TASKS', payload: res.data}))
                .catch((error) => console.log(error))
        }

}