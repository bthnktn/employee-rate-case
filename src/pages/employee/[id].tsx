import { EmployeeStoreData } from "@/interfaces";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Image from "next/image";

const EmployeePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const data: EmployeeStoreData[] = useSelector(
    (state: any) => state.employees.employeeData
  );
  const emp = data.find((emp) => emp.id === id);
  if (!emp) return null;

  const goBack = () => {
    router.back();
  };

  const { firstName, lastName, image, jobTitle, address, email, phone, score } =
    emp;

  return (
    <div className="content">
      <div className="detail-card">
        <button onClick={goBack}>Back</button>
        <div className="info">
          <Image
            src={image}
            alt="user image"
            className="photo"
            width={120}
            height={120}
          />
          <p className="name">{`${firstName} ${lastName}`}</p>
          <p>jobTitle: {jobTitle}</p>
          <p>address: {address}</p>
          <p>email: {email}</p>
          <p>phone: {phone}</p>
          <p>score: {score}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
