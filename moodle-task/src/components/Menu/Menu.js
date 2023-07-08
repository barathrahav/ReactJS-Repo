import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Moodle Task
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Hello World
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Congrats">
                Congrats Cards
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Super">
                Super Over
              </Link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More Tasks
              </a>
              <ul class="dropdown-menu navbar-dark bg-dark">
                <li className="nav-item">
                  <Link className="nav-link" to="/Notification">
                    Notification App
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Social">
                    Social Button
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">
                    Login Design
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Technology">
                    Technology Card
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Hooks">
                    Hooks Assignment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/FruitCounter">
                    Fruit Counter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Feedback">
                    Feedback App
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Fakestore">
                    Fakestore API
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/DateFunction">
                    Date Function
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
