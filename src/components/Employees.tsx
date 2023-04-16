import React from "react";
import EmployeeCard from "./EmployeeCard";
import { useSelector } from "react-redux";
import { EmployeeStoreData } from "@/interfaces";

const Employees: React.FC = () => {
  const data: EmployeeStoreData[] = useSelector(
    (state: any) => state.employees.employeeData
  );

  return (
    <div className="content">
      {data.map((emp) => (
        <EmployeeCard key={emp.id} {...emp} />
      ))}
    </div>
  );
};
export default Employees;
