import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    return {
      title: isLast ? (
        segment.charAt(0).toUpperCase() + segment.slice(1)
      ) : (
        <Link to={path}>
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </Link>
      ),
    };
  });

  const items = [...breadcrumbItems];

  return (
    <div className="breadcrumb-container">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default BreadCrumb;
