import axios from "axios";

export function getStatuses() {
    return (dispatch) => {
        axios.get('http://localhost:5001/statuses')
            .then((res) => dispatch({type: 'GET_STATUSES', payload: res.data}))
            .catch((err) => console.log(err))
    }
}

export function getTasks() {

    return (dispatch) => {
        axios.get('http://localhost:5001/tasks')
            .then((res) => dispatch({type: 'GET_TASKS', payload: res.data}))
            .catch((err) => console.log(err))
    }
}

export function changePriority(id, newPriority) {
    return (dispatch) => {
        axios.patch(`http://localhost:5001/tasks/${id}`, {priority: newPriority})
            .then(res => dispatch(getTasks()))
            .catch((err) => console.log(err))
    }
}

export function createNewTask(newTask) {
    return (dispatch) => {
        axios.post('http://localhost:5001/tasks', newTask)
            .then(res => dispatch(getTasks()))
            .catch((err) => console.log(err))
    }
}

export function updateTask(id, newTask) {
    return (dispatch) => {
        axios.patch(`http://localhost:5001/tasks/${id}`, newTask)
            .then(res => dispatch(getTasks()))
            .catch(err => console.log(err))
    }
}

export function deleteTask(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:5001/tasks/${id}`)
            .then(res => dispatch(getTasks()))
            .catch(err => console.log(err))
    }
}

export function changeStatus(id, newStatus) {
    return (dispatch) => {
        axios.patch(`http://localhost:5001/tasks/${id}`, {status: newStatus})
            .then(res => dispatch(getTasks()))
            .catch(err => console.log(err))
    }
}
