import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-3">
            <div className="header__content">
              <p>User name</p>
              <button type="button" className="btn btn-secondary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
