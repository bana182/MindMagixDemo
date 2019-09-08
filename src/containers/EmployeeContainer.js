import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EmployeeList } from '../components/employeeList/EmployeeList'
import style from './EmployeeContainer.module.css'
import axios from 'axios'
import * as actionTypes from '../store/actions/actionsTypes'
import { fetchEmployeeAction } from '../store/actions/Actions'

class Employees extends Component {

    componentDidMount() {
        this.fetchEmployee()
    }

    fetchEmployee() {
       axios.get('https://reqres.in/api/users?page=2').then( response => {
            console.log(response)
            const { data: { data } } = response
            this.props.fetchEmployees(data)
        })
    }

    showDetail = (employeeId) => {
        console.log('this.props', this.props)
        this.props.history.push(`/userdetail/${employeeId}`)
    }
    render() {
        const { employeeList } = this.props
        console.log('this.props', this.props)
        return (
            <div className={style.wrapper}>
                <div className={ style.container }>
                    <div className={style.profile}>
                        { employeeList ? 
                            employeeList.map((element, index) => (
                                <EmployeeList employee={element} showDetail={this.showDetail} />
                            ))
                                : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employeeList: state.employeeList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchEmployees: (data) => dispatch(fetchEmployeeAction(data)),
        deleteEmployee: (id) => dispatch({type: actionTypes.DELETE_EMPLOYEE, payload: { id }})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Employees)