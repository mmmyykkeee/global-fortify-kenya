import React from 'react'
import {Link} from 'react-router-dom'

function Pagination() {
  return (
    <div>
      <div className="d-flex text-center mb-3 justify-content-center">
        <Link to="/financialplanning">
          <div className="pages">1</div>
        </Link>
        <Link to="/startingout">
          <div className="pages">2</div>
        </Link>
        <Link to="/settlingdown">
          <div className="pages">3</div>
        </Link>
        <Link to="/emptynest">
          <div className="pages">4</div>
        </Link>
        <Link to="/retirement">
          <div className="pages">5</div>
        </Link>
      </div>
    </div>
  );
}

export default Pagination
