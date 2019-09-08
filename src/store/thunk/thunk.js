import { fetchEmployeeAction } from '../actions/Actions'
import axios from 'axios'

export const fetchEmployeeList = ( payload ) => {
    return dispatch => {
        axios.get('https://reqres.in/api/users?page=2').then( response => {
            console.log('making API calls through axios')
            const { data: { data } } = response
            dispatch(fetchEmployeeAction(data))
        })
    }
}