// import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ info, pageNumber, setPageNumber }) => {
  console.log(info?.pages);
  return (
    <ReactPaginate
      className="pagination flex justify-content-center  gap-4 my-4 text-balck"
      pageCount={info?.pages}
      previousLabel={"prev"}
      nextLabel={"Next"}
      forcePage={pageNumber===1 ? 0: pageNumber -1}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(e)=> setPageNumber(e.selected + 1) }
      // nextClassName="btn btn-primary text-white"
      // previousClassName="btn btn-primary"
      activeClassName="active"
      />
      
  );
};

export default Pagination;
