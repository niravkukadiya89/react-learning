import React from "react";
import ProtoType from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const { ItemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(ItemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.ProtoType = {
  ItemsCount: ProtoType.number.isRequired,
  pageSize: ProtoType.number.isRequired,
  currentPage: ProtoType.number.isRequired,
  onPageChange: ProtoType.func.isRequired
};
export default Pagination;
