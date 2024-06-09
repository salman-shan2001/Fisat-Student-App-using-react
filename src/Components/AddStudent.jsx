import React, { useState } from 'react'
import Navebar from './Navebar'

const AddStudent = () => {
    const [student,setstudent]=useState(
        {
            "fname":"",
            "lname":"",
            "college":"",
            "DOB":"",
            "course":"",
            "email":"",
            "mob":"",
            "address":""



        }
    )

    const inputHandler=(event)=>{
        setstudent({...student,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(student)
    }

    
  return (
    <div>
        <Navebar/>
      <div className="container">
        <div className="row">
            <center>
                <h1>Add New Student</h1>
            </center>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">First-Name</label>
                    <input type="text" className="form-control" name='fname' value={student.fname} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Last-Name</label>
                <input type="text" className="form-control" name='lname' value={student.lname} on onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">College-Name</label>
                <input type="text" className="form-control" name='college' value={student.college} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">DOB</label>
                <input type="date" name='DOB' id="" className="form-control" value={student.DOB} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Course-name</label>
                <select name='course' id="" className="form-label" value={student.course} onChange={inputHandler}>
                    <option value="">MCA</option>
                    <option value="">MBA</option>
                    <option value="">BTECH</option>
                </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Mobile-Number</label>
                <input type="text" className="form-control" name='mob' value={student.mob} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" name='email' id="" className="form-control" value={student.email} onChange={inputHandler}  />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Address</label>
                <textarea name='address' id="" className="form-control" value={student.address} onChange={inputHandler}></textarea>
                <br></br><br></br>
                </div>
                <center>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>ADD STUDENT</button>
                </div></center>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
