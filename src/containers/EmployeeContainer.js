import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EmployeeList } from '../components/employeeList/EmployeeList'
import style from './EmployeeContainer.module.css'
import axios from 'axios'
import * as actionTypes from '../store/actions/actionsTypes'
import { fetchEmployeeList } from '../store/thunk/thunk'

export class Employees extends Component {

    componentDidMount() {
        this.props.fetchEmployees()
    }

    /* fetchEmployee() {
       axios.get('https://reqres.in/api/users?page=2').then( response => {
            console.log(response)
            const { data: { data } } = response
            this.props.fetchEmployees(data)
        })
    }*/

    showDetail = (employeeId) => {
        this.props.history.push(`/userdetail/${employeeId}`)
    }
    render() {
        const { employeeList } = this.props
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
        fetchEmployees: () => dispatch(fetchEmployeeList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Employees)