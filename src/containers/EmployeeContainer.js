import React, { Component } from 'react'
import { EmployeeList } from '../components/employeeList/EmployeeList'
import style from './EmployeeContainer.module.css'
import axios from 'axios'
import { async } from 'q';

export default class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        this.fetchEmployee()
    }

    fetchEmployee() {
       axios.get('https://reqres.in/api/users?page=2').then( response => {
            console.log(response)
            const { data: { data } } = response
            this.setState({ employeeList: data })
        })
    }

    showDetail = (employeeId) => {
        console.log('this.props', this.props)
        this.props.history.push(`/userdetail/${employeeId}`)
    }
    render() {
        const { employeeList } = this.state
        return (
            <div className={style.wrapper}>
                <div className={ style.container }>
                    <div className={style.profile}>
                        {
                            employeeList.map((element, index) => (
                                <EmployeeList employee={element} showDetail={this.showDetail} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}