// Menu.js
import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  const mainLinks = [
    { to: "/Congrats", label: "Congrats Cards" },
    { to: "/Super", label: "Super Over" },
  ];

  const moreLinks = [
    { to: "/Notification", label: "Notification App" },
    { to: "/Social", label: "Social Button" },
    { to: "/Login", label: "Login Design" },
    { to: "/Technology", label: "Technology Card" },
    { to: "/Hooks", label: "Hooks Assignment" },
    { to: "/FruitCounter", label: "Fruit Counter" },
    { to: "/Feedback", label: "Feedback App" },
    { to: "/Fakestore", label: "Fakestore API" },
    { to: "/DateFunction", label: "Date Function" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          Moodle Task
        </Link>

        {/* Toggler (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Main links */}
            {mainLinks.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Dropdown */}
            <li className="nav-item dropdown">
              {/* Use <a> so Bootstrap styles/aligns it perfectly */}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="moreTasksDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()} // avoid scroll to top
              >
                More Tasks
              </a>

              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="moreTasksDropdown"
              >
                {moreLinks.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      className={({ isActive }) =>
                        "dropdown-item" + (isActive ? " active" : "")
                      }
                      to={item.to}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
