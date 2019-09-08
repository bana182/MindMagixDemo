import React, { Component } from 'react'
import axios from 'axios'
import { EmployeeDetail } from '../components/employeeDetail/EmployeeDetail'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeDetail: {}
        }
    }

    componentDidMount() {
        const { match: { params: { id }}} = this.props
        if(id) {
            axios.get(`https://reqres.in/api/users/${id}`).then( response => {
                console.log('response', response)
                const { data:{ data }} = response
                this.setState({ employeeDetail: data })
            })
        }
    }
    render() {
        const { employeeDetail } = this.state
        let style ={
            textAlign: 'center',
            fontSize: 'xx-large'
        }
        return (
            <div>
                <div style={style}>
                    { Object.keys(employeeDetail).length > 0 ? <EmployeeDetail details={employeeDetail} /> : '' }
                </div>
            </div>
        )
    }
}