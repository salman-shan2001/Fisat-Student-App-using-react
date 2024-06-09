import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navebar from './Navebar'

const ViewAllStudents = () => {
    const [student, changestudent] = useState([])
    const fetchdata = () => (
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response)=>{changestudent(response.data)}
        ).catch().finally()
    )
    useEffect(
        ()=>{fetchdata()},[]
    )
    return (
        <div>
            <Navebar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">MobileNo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    student.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value._id}</th>
                                                <td>{value.firstname} {value.lastname}</td>
                                                <td>{value.course}</td>
                                                <td>{value.mobile}</td>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllStudents
