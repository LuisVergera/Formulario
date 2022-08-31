import React, { useState } from "react";
import { useFormik } from "formik";

export default function Signup() {
  const formik = useFormik();

  return (
    <form>
      <div className="input-container">
        <input id="name" name="name" type="text" placeholder="Full Name" />
      </div>
    </form>
  );
}
