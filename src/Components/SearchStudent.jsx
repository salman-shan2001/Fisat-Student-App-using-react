import React from 'react'
import Navebar from './Navebar'

const SearchStudent = () => {
  return (
    <div>
        <Navebar/>
      <div className="container">
        <div className="row">
            <center>
                <h1>
                    SEARCH Here
                </h1>
            </center>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <br></br><br></br>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Student Name</label>
                <input type="text" className="form-control" />
                </div>
                <center>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">ADD STUDENT</button>
                </div></center>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchStudent
