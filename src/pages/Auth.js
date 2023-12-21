import React from "react"
import "../styles/Login.css"
import { Link } from "react-router-dom";

export default function () {
  
  return (
    <div className="whole">
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">SIGN UP</h3>
          
          <div className="form-group mt-3">
            
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Name"/>
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address" />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"/>
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm Password"/>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
                <Link to='/Home'>
              Submit
              </Link>
            </button>
          </div>
          
        </div>
      </form>
    </div>
    </div>
  )
}