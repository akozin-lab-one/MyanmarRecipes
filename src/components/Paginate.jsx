import React from 'react'

const VPaginate = ({ postsPerPage, totalPosts, currentPage, paginate, previousPage, nextPage }) => {
    const pageNumbers = [];
 
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
       pageNumbers.push(i);
    }
    
    return (
<div className="pagination-container text-center mx-auto">
  <ul className="pagination inline mx-auto">
    <li
      onClick={previousPage}
      className="page-number cursor-pointer inline-block m-1 px-4 py-2 bg-gray-300 rounded"
    >
      Prev
    </li>
    {pageNumbers.map((number) => (
      <li
        key={number}
        onClick={() => paginate(number)}
        className={`page-number cursor-pointer inline-block m-1 px-4 py-2 rounded ${
            currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
      >
        {number}
      </li>
    ))}
    <li
      onClick={nextPage}
      className="page-number cursor-pointer inline-block m-1 px-4 py-2 bg-gray-300 rounded"
    >
      Next
    </li>
  </ul>
</div>

    );
}

export default VPaginate