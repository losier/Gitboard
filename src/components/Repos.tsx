import React from "react";

interface props {
  userName: string;
}

const Repos: React.FC<props> = ({ userName }) => {
  return <div>{userName}</div>;
};

export default Repos;
