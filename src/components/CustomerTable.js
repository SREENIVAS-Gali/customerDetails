import React, { useState } from "react";
import Pagination from "./Pagination";
import Search from "./Search";
import SortDropdown from "./SortDropdown";

// Utility function to add leading zeros to single-digit numbers
const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

const CustomerTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const filteredData = data.filter(
    (customer) =>
      customer.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let sortedData = [...filteredData];
  if (sortBy === "time") {
    sortedData.sort((a, b) => {
      return (
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    });
  } else if (sortBy === "date") {
    sortedData.sort((a, b) => {
      return new Date(a.created_at) - new Date(b.created_at);
    });
  }

  const currentRecords = sortedData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Customer Data</h2>
      <div className="search-sort-container">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <table className="customer-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((customer, index) => (
            <tr key={index}>
              <td>{customer.sno}</td>
              <td>{customer.customer_name}</td>
              <td>{customer.age}</td>
              <td>{customer.phone}</td>
              <td>{customer.location}</td>
              <td>
                <span>
                  {addLeadingZero(new Date(customer.created_at).getDate())}
                </span>
                /<span>&nbsp;</span>
                <span>
                  {addLeadingZero(new Date(customer.created_at).getMonth() + 1)}
                </span>
                /<span>&nbsp;</span>
                <span>{new Date(customer.created_at).getFullYear()}</span>&nbsp;
                <span>&nbsp;</span>
                <span>
                  {new Date(customer.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedData.length / recordsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CustomerTable;
