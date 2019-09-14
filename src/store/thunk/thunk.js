import { fetchEmployeeAction } from '../actions/Actions'
import axios from 'axios'

export const fetchEmployeeList = () => {
    return dispatch => {
        axios.get('https://reqres.in/api/users?page=2').then( response => {
            const { data: { data } } = response
            dispatch(fetchEmployeeAction(data))
        })
    }
}