import React from "react";
import _ from "lodash";
import { PropTypes } from "prop-types";
const Pagination = (props) => {
  const { pageSize, itemCount, onPageChange, currentPage } = props;
  // console.log(currentPage);
  const pageCount = Math.ceil(itemCount / pageSize);
  // console.log(pageCount);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  // console.log(pages);

  return (
    <>
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                onClick={() => {
                  onPageChange(page);
                }}
                className="page-link"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
