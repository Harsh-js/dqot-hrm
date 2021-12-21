import React from "react";

// components

import Leavetable from "components/Cards/Leavetable";

// layout for page

import Admin from "layouts/Admin.js";

export default function Leavehistory() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Leavetable />
          
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Leavehistory.layout = Admin;
