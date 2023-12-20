import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../../auth'; // Import your Firebase configuration

const OperatorsList = () => {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app); // Initialize Firestore with your Firebase app
      const operatorsCollection = collection(db, 'operators'); // Replace 'operators' with your collection name

      try {
        const querySnapshot = await getDocs(operatorsCollection);
        const operatorList = [];
        querySnapshot.forEach((doc) => {
          // Assuming each operator has a 'name' field, adjust according to your Firestore schema
          const operatorData = {
            id: doc.id,
            name: doc.data().name,
            // Add other fields as needed
          };
          operatorList.push(operatorData);
        });
        setOperators(operatorList);
      } catch (error) {
        console.error('Error fetching operators: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Operators List</h1>
      <ul>
        {operators.map((operator) => (
          <li key={operator.id}>{operator.name}</li>
          // Render other details of the operator as needed
        ))}
      </ul>
    </div>
  );
};

export default OperatorsList;
