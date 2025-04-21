import PageHeaderUI from "@/app/__components/pageHeader/PageHeaderUI";
import React from "react";

const Users = () => {
  const pageHeader = {
    title: "Users ",
    subtitle: "Manage your users, their roles, and permissions",
    link: "#",
    searhFor: "store",
  };

  return (
    <>
      <PageHeaderUI
        title={pageHeader.title}
        subtitle={pageHeader.subtitle}
        link={pageHeader.link}
      />
    </>
  );
};

export default Users;
