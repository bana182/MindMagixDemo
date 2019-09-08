import React from 'react'
import style from './EmployeeDetail.module.css'

export const EmployeeDetail = (props) => {
    const { details } = props

    return(
        <div className={style.container}>
            <div className={style.detailContainer}>
            <table>
                <tbody>
                    <tr>
                        <td><label>Emp Id:</label></td>
                        <td><label>{details.id}</label></td>
                    </tr>
                    <tr>
                        <td><label>FIrst Name:</label></td>
                        <td><label>{details.first_name}</label></td>
                    </tr>
                    <tr>
                        <td><label>Last Name:</label></td>
                        <td><label>{details.last_name}</label></td>
                    </tr>
                    <tr>
                        <td><label>Email:</label></td>
                        <td><label>{details.email}</label></td>
                    </tr>
                </tbody>
            </table>
        </div>
            <div className={style.imageContainer}>
                <img src={details.avatar}></img>
            </div>
        </div>
    )
}