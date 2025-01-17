import * as actionTypes from '../actions/actionsTypes'

const initialState = {
    employeeList: []
}

const employeeReducer = (state = initialState, action) => {
        switch(action.type) {
            case actionTypes.FETCH_EMPLOYEES:
                return {
                    ...state,
                    employeeList: action.payload
                }
            default:
                return state
        }
}

export default employeeReducer;