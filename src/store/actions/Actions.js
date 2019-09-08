import * as actionTypes from './actionsTypes'

export const fetchEmployeeAction = ( payload ) => {
    return {
        type: actionTypes.FETCH_EMPLOYEES,
        payload
    }
}