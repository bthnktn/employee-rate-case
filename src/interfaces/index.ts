export type Employees = Employee[];

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  jobTitle: string;
  address: string;
  email: string;
  phone: string;
};

export type EmployeeStoreData = Employee & {
  score: number;
};
