import React from "react";
import { Link } from "@reach/router";

export default function SideBar() {
  return (
    <Link to="/client/add" className="btn btn-success btn-block">
      <i className="fas fa-plus" />
      New
    </Link>
  );
}