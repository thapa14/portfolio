import React from "react";

function Cards(props) {
    const {prefix, icon, className, view, d, title, message} = props;
  return (
    <div className="card d-flex flex-column align-items-center justify-content-center shadow p-3 my-5">
      <div className="card-circle d-flex flex-column align-items-center justify-content-center mt-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix={prefix}
          data-icon={icon}
          className={className}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={view}
        >
          <path
            fill="currentColor"
            d={d}
            ></path>
        </svg>

      </div>

      <div className="card-body text-center">
        <h5 className="card-title my-3">{title}</h5>
        <p className="card-text">
          {message}
        </p>
      </div>
    </div>
  );
}

export default Cards;
