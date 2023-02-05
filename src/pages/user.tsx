import React from "react";
import { useRouter } from "next/router";

const user: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;
  return <div>{username}</div>;
};

export default user;
