import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmployeeDetail = () => {
    const param = useParams()
    useEffect(() => {
    const empId  = param.empid
    axios.get(`https://reqres.in/api/users?id=${empId}`)
    .then(response => {
    const empData = response.data
    console.log(empData)
    })
    },[])
    return (
        <div>
           <h2> EmployeeDetail </h2>
        </div>
    );
};

export default EmployeeDetail;