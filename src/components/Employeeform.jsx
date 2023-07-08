import React from 'react'
import Navbar from './Navbar'

const Employeeform = () => {

  return (
    <div>
        <Navbar/>
        <div className="container mt-5">
          <div className="container">
            <h1 style={{textAlign:'center'}}>Employee Form</h1>
          </div>
          <div className="row g-3 mt-5">
            <div className="col col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col col-sm-4 col-md-4 col-lg-4">
                  <label htmlFor="" className="form-label " style={{fontSize:"25px"}}>Name</label>
                </div>
                <div className="col col-sm-8 col-md-8 col-lg-8">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col col-sm-4 col-md-4 col-lg-4">
                  <label htmlFor="" className="form-label " style={{fontSize:"25px"}}>Designation</label>
                </div>
                <div className="col col-sm-8 col-md-8 col-lg-8">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col col-sm-4 col-md-4 col-lg-4">
                  <label htmlFor="" className="form-label " style={{fontSize:"25px"}}>Location</label>
                </div>
                <div className="col col-sm-8 col-md-8 col-lg-8">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col col-sm-4 col-md-4 col-lg-4">
                  <label htmlFor="" className="form-label " style={{fontSize:"25px"}}>Salary</label>
                </div>
                <div className="col col-sm-8 col-md-8 col-lg-8">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="container mt-3" style={{textAlign:'center'}}>
                <button className="btn btn-danger"
                >Submit</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Employeeform