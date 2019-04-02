import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { ItemsCount, pageSize, onPageChange } = props;

    const pagesCount = Math.ceil(ItemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    
   return <nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page =>
                <li key={page} className="page-item">
                    <a onClick={onPageChange} className="page-link">{page}</a>
                </li>
            )}
        </ul>
    </nav>
        ;
}

export default Pagination;