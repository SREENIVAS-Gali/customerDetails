import React, { useState } from "react";
import CustomerTable from "./CustomerTable";

const CustomerData = () => {
  const [dummyData, setDummyData] = useState(null);

  const generateDummyData = () => {
    const dummyData = [];
    const locations = [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
    ];
    const names = [
      "John",
      "Jane",
      "Alice",
      "Bob",
      "Michael",
      "Emily",
      "David",
      "Sarah",
      "Daniel",
      "Maria",
    ];
    const getRandomItem = (array) =>
      array[Math.floor(Math.random() * array.length)];

    for (let i = 1; i <= 50; i++) {
      const sno = i;
      const customer_name = getRandomItem(names) + " " + getRandomItem(names);
      const age = Math.floor(Math.random() * 50) + 20; // Random age between 20 and 69
      const phone =
        "995-902-" +
        Math.floor(Math.random() * 10000)
          .toString()
          .padStart(4, "0"); // Random phone number
      const location = getRandomItem(locations);
      const created_at = new Date(
        +new Date() - Math.floor(Math.random() * 10000000000)
      ).toISOString(); // Random date in the past 10,000,000,000 milliseconds

      dummyData.push({ sno, customer_name, age, phone, location, created_at });
    }

    setDummyData(dummyData);
    console.log(dummyData);
  };

  return (
    <div>
      <h2>Customer Data Generator</h2>
      <button className="generate-button" onClick={generateDummyData}>Generate Dummy Data</button>
      {dummyData && <CustomerTable data={dummyData} />}
    </div>
  );
};

export default CustomerData;
