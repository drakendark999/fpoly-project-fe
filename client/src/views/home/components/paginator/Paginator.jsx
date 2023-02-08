import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Table from "../table/Table";
import "./paginator.css";

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {

//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item,index) => (
//           <div key={index}>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

function Paginator({ itemsPerPage, arrayA }) {
  const items = arrayA;

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <Table arrayA={currentItems} />
      <ReactPaginate
        breakLabel=""
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousClassName="previous"
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="contain-page"
        pageClassName="contain-page__list"
        nextClassName="next"
      />
    </>
  );
}
export default Paginator;
