import React from "react";
import Image from "next/image";
import { Employee } from "../interfaces/index";
import { upvote } from "@/store";
import { useDispatch } from "react-redux";
import Link from "next/link";

type Props = Pick<
  Employee,
  "id" | "firstName" | "lastName" | "image" | "jobTitle"
>;

const EmployeeCard: React.FC<Props> = ({
  id,
  firstName,
  lastName,
  image,
  jobTitle,
}) => {
  const dispatch = useDispatch();
  const onUpvote: React.MouseEventHandler = (e) => {
    dispatch(upvote(id));
  };
  return (
    <div className="card-content">
      <Image
        src={image}
        alt="user image"
        className="photo"
        width={120}
        height={120}
      />

      <div className="info">
        <p className="name">{`${firstName} ${lastName}`}</p>
        <p className="job-title">{jobTitle}</p>
        <Link href={`/employee/${id}`} className="details-link">
          details
        </Link>
      </div>
      <div className="up">
        <button onClick={onUpvote}>UP</button>
      </div>
    </div>
  );
};
export default EmployeeCard;
