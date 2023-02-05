import React from "react";
import { useRouter } from "next/router";
import Head from "../components/Head";

const user: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <main>
        {username}
        <div></div>
      </main>
    </div>
  );
};

export default user;
