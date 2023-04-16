import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Employees from "../components/Employees";
import { gql, useQuery } from "@apollo/client";
import { initialize } from "@/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const GET_ALL_EMPLOYEES = gql`
  query allEmployees {
    allEmployees {
      id
      firstName
      lastName
      image
      jobTitle
      address
      email
      phone
    }
  }
`;

export default function Home() {
  const dispatch = useDispatch();
  const { data: allEmp } = useQuery(GET_ALL_EMPLOYEES);

  useEffect(() => {
    if (allEmp) {
      dispatch(initialize(allEmp.allEmployees));
    }
  }, [allEmp, dispatch]);

  return (
    <>
      <Employees />
    </>
  );
}
