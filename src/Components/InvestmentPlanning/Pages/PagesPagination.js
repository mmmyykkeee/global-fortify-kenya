import React from 'react'
import {Link} from 'react-router-dom'

function PagesPagination() {
  return (
    <div>
      <div>
        <div className="d-flex text-center mb-3 justify-content-center d-none">
          <Link to="/investmentplannig">
            <div className="pages">1</div>
          </Link>
          <Link to="/cash">
            <div className="pages">2</div>
          </Link>
          <Link to="/bonds">
            <div className="pages">3</div>
          </Link>
          <Link to="/equities">
            <div className="pages">4</div>
          </Link>
          <Link to="/property">
            <div className="pages">5</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PagesPagination
