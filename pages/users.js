import { useEffect, useState } from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  console.log("users ssss", users);
  return (
    <MainContainer keywords={"page users"}>
      <h1>All users</h1>
      <ul>
        {users.map((el, idx) => {
          return (
            <li key={idx}>
              <Link href={`/users/${idx + 1}`}>
                <h2>{el.name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
