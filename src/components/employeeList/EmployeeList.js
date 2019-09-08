import React from 'react'
import style from './EmployeeList.module.css'

export const EmployeeList = (props) => {
    const { employee, showDetail } = props
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div id={props.id} className={style.card}>
                <div onClick={() => { showDetail(employee.id)}}>
                    <p><img className="img-fluid" src={employee.avatar}/></p>
                    <h4 className="card-title">
                        <span>{employee.first_name}</span>
                        <span>{employee.last_name}</span>
                    </h4>
                </div>
                <div className={ style['delete-btn']}>
                    <a href="#">Delete</a>
                </div>
            </div>
        </div>
    )
}