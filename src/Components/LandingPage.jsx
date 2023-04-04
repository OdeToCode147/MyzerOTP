import React, { useEffect, useState } from "react";
import logo from "../Assets/LOGO.png";
import rectangle1 from "../Assets/Rectangle1.png";
import rectangle2 from "../Assets/Rectangle2.png";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";

const LandingPage = () => {
  // random OTP
  const [generateOTP, setGenerateOTP] = useState();
  // User Input
  const [otp, setOTP] = useState("");
  // For New OTP
  let [verifyCount, setVerifyCount] = useState(1);
  //Display If the OTP is right or not
  const [comments, setComments] = useState("");
  const [commentsCSS, setCommentsCSS] = useState(false);
  console.log(generateOTP);
  useEffect(() => {
    setGenerateOTP(Math.floor(1000 + Math.random() * 9000));
  }, [verifyCount]);
  const handleOTPchange = (event) => {
    setOTP(event.target.value);
    setComments("")
  };
  const handleReenter = () => {
    setOTP("");
    setComments("")
  };
  const handleVerify = () => {
    setVerifyCount(verifyCount++);
    if (otp.length != 4) {
      setComments("OTP must be 4 digits");
      setCommentsCSS(false);
      console.log("OTP must be 4 digits");
    } else if (otp != generateOTP) {
      setComments(
        `Entered Wrong OTP :${otp}, Please Re-enter with Correct OTP`
      );
      setCommentsCSS(false);
      console.log(
        "Entered Wrong OTP :",
        otp,
        "Please Re-enter with Correct OTP"
      );
    } else {
      setComments("Success, The OTP matched!");
      setCommentsCSS(true);
      console.log("Success, The OTP matched!");
    }
  };

  return (
    <>
      <img src={logo} alt="logo" width="150px" className="logo" />
      <div className="entirePage">
        <div className="contentBox">
          <h1 className="content">Verification</h1>
          <div className="content smsNumber">
            <div>SMS OTP</div>
            <div className="phoneNumber">Sent on: 99887-66554</div>
          </div>
          <div className="content otpContainer">
            <img
              className="otpBox"
              src={rectangle1}
              alt="rectangle1"
              width="60px"
            />
            <img
              className="otpBox"
              src={rectangle1}
              alt="rectangle1"
              width="60px"
            />
            <img
              className="otpBox"
              src={rectangle1}
              alt="rectangle1"
              width="60px"
            />
            <img
              className="otpBox"
              src={rectangle1}
              alt="rectangle1"
              width="60px"
            />
          </div>
          <input
            className="otp"
            type="text"
            pattern="[0-9]*"
            maxlength="4"
            value={otp}
            onChange={(event) => handleOTPchange(event)}
          />

          <div className="content1">
            <span>Entered Wrong Details?</span>{" "}
            <span className="reEnter" onClick={handleReenter}>
              Re-enter
            </span>
          </div>
          <div className="content verifyBox" onClick={handleVerify}>
            <img src={rectangle2} alt="" width="300px" />
          </div>
          <div>
            <h1 className="verify" onClick={handleVerify}>
              Verify
            </h1>
            <div className={commentsCSS ? "commentsSuccess" : "commentsFail"}>
              {comments}
            </div>
          </div>
        </div>
        <div className="details">
          <img className="data" src={image2} alt="" />
          <img src={image1} alt="" className="dataBackdrop" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
