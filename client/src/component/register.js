import React from "react";

const Register = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <div className="card card-body">
          <h1 className="text-center mb-3">
            <i className="fas fa-user-plus"></i> Register
          </h1>
          <form action="http://localhost:4000/register" method="POST">
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter User Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Create Password"
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                id="password2"
                name="password2"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div> */}
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </form>
          <p className="lead mt-4">
            Have An Account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
