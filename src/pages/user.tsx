import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Heads, Userinfo, Errors } from "../components";

const user: React.FC = () => {
  const router = useRouter();
  const username = router.query["username"];
  const [userData, setUserData] = useState(null);

  const getUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status === 404) {
          // return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          // return setError({ active: true, type: 403 });
        }
        return response.json();
      })
      .then((json) => setUserData(json))
      .catch((error) => {
        // setError({ active: true, type: 400 });
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (username) {
      getUserData();
    }
  }, [username]);

  return (
    <div>
      <main>{userData && <Userinfo userData={userData} />}</main>
    </div>
  );
};

export default user;
