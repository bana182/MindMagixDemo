import employeeReducer from './employeeReducer'
import * as actionTypes from '../actions/actionsTypes'
import { exportAllDeclaration } from '@babel/types'

describe('Employee Reducer', () => {
    it('it should return updated employeeList if action type = FETCH_EMPLOYEES', () => {
        const initialState = {
            employeeList: []
        }
        const action = {
            type: actionTypes.FETCH_EMPLOYEES,
            payload: [
                {
                    first_name: 'Manish',
                    last_name: 'dixit',
                    avatar: 'https://sdsdsdsd',
                    email: 'abc@gmail.com'
                }
            ]
        }
        const state = employeeReducer(initialState, action)
        expect(state.employeeList.length).toBe(1)
    })
    it('it should return same employeeList if action type is other type', () => {
        const initialState = {
            employeeList: []
        }
        const action = {
            type: 'other',
            payload: [
                {
                    first_name: 'Manish',
                    last_name: 'dixit',
                    avatar: 'https://sdsdsdsd',
                    email: 'abc@gmail.com'
                }
            ]
        }
        const state = employeeReducer(initialState, action)
        expect(state.employeeList.length).toBe(0)
    })
})