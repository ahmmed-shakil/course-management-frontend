import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <PhoneInput
      inputStyle={{ height: "50px", width: "100%" }}
      country={"us"}
      value={phoneNumber}
      onChange={(phone) => setPhoneNumber({ phone })}
    />
  );
};

export default PhoneInputComponent;
