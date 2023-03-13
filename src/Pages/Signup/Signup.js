import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import OTPInput, { ResendOTP } from "otp-input-react";

import { NavLink, useNavigate } from "react-router-dom";

import login_img from "../../Assets/images/login_img.png";
import login_logo from "../../Assets/images/login_logo.png";

import NumberInput from "../Signup/NumberInput";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ApiPostNoAuth } from "../../Helpers/Api/ApiData";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLogin } from "./../../Store/Reducers/Authreducer/auth";
import { setUser } from "../../Store/Reducers/Userreducer/user";
import { useRef } from "react";

const schema = yup.object().shape({
  firstName:  yup.string().required('This Field Is Required').typeError('This Field Is Required'),
  lastName:yup.string().required('This Field Is Required').typeError('This Field Is Required'),
  email: yup.string().email('Enter Valid Email').required('This Field Is Required').typeError('Email  is required'),
  phoneNumber: yup.string().required(),
  password: yup.string().required().min(8).uppercase(1).lowercase(1),
});

const Signup = () => {
  const [OTP, setOTP] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const check = useRef(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => setShow(true);

  //react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  //function for signup
  const handleRegister = (data) => {
    console.log(watch('phoneNumber').substr(watch('phoneNumber').length-10))  
    console.log(data)
    try {
      if (check.current.checked) {

        ApiPostNoAuth("/user/signup", data)
          .then((response) => {
            toast.success(response?.data?.message);
            setShow(true);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }else{
        toast.error('Accept Terms & Condition')
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  //function for otp verification
  const handleOtpVerify = () => {
    ApiPostNoAuth("/user/verify/otp", {
      userId:watch('phoneNumber').substr(watch('phoneNumber').length-10),
      otp: OTP,
    })
      .then((response) => {
        // toast.success(response?.data?.message);
        console.log(response,"signup")
        dispatch(
          setLogin({
            token: response?.data?.data?.token,
          })
        );
        dispatch(setUser({ data: response?.data?.data?.userData }))
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const  handleResendOTP=()=>{
    console.log("called")
    try {
      ApiPostNoAuth('/user/otp/resend',{
        phoneNumber: watch('phoneNumber').substr(watch('phoneNumber').length-10)
      }).then((response)=>{
        console.log(response)
        toast.success("OTP Send Successfully")
      })
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if (OTP.length == 4) {
      handleOtpVerify();
    }
  }, [OTP]);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setValue("email", urlParams.get("email"));
    setValue("firstName", urlParams.get("firstName"));
    setValue("lastName", urlParams.get("lastName"));
  }, [window.location.search]);

  return (
    <div className="signup_wrapper">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_block">
            <div className="login_sec">
              <div className="login_left">
                <div className="login_img">
                  <img src={login_img} alt="login_img" />
                </div>
                <div className="login_slid"></div>
                <h2>Easy to use Dashboard</h2>
                <p>
                  Let’s see what we have new, check it out!So maybe write here
                  simething more hehe.
                </p>
              </div>
            </div>
            <div className="login_sec">
              <div className="login_right">
                <div className="signup_logo"> 
                  <div className="login_logo">
                    <NavLink to="/">
                      <img src={login_logo} alt="login_logo" />
                    </NavLink>
                  </div>
                  <div>
                    <h2>Welcome Back!</h2>
                    <p>Let’s build something great</p>
                  </div>
                </div>
                <div className="login_form">
                  <form>
                    <ul className="login_form_block">
                      <li>
                        <label className="login_label">
                          <p>first name</p>
                          <input type="name" {...register("firstName")} />
                        </label>
                        <div style={{ color: 'red' }}>{errors?.firstName?.message}</div>
                      </li>
                      <li>
                        <label className="login_label">
                          <p>last name</p>
                          <input type="name" {...register("lastName")} />
                        </label>
                        <div style={{ color: 'red' }}>{errors?.lastName?.message}</div>
                      </li>
                      <li>
                        <label className="login_label">
                          <p>e-mail</p>
                          <input type="email" {...register("email")} />
                        </label>
                        <div style={{ color: 'red' }}>{errors?.email?.message}</div>
                      </li>
                      <li>
                        <label className="login_label signup_label">
                          <p>phone number</p>
                          <div>
                            <NumberInput setValue={setValue} />
                          </div>
                        </label>
                        <div style={{ color: 'red' }}>{watch("phoneNumber")?.length>=10 && errors?.phoneNumber?.message}</div>
                      </li>
                      <li>
                        <label className="login_label">
                          <p>Password</p>
                          <input type="Password" {...register("password")} />
                        </label>
                        <div style={{ color: 'red' }}>{errors?.password?.message}</div>
                      </li>
                      <li>
                        <div className="login_check">
                          <input type="checkbox" id="login_check1" ref={check} />
                          <label for="login_check1">
                            terms & conditions apply
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="login_btn">
                          <button
                            type="button"
                            onClick={handleSubmit(handleRegister)}
                          >
                            Register
                          </button>
                        </div>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className="accounts_text">
                  <span>or do it via other accounts</span>
                </div>
                <div className="register_link">
                  <p>
                    Don’t have an account?{" "}
                    <NavLink to="/Loginpage">LOGIN</NavLink>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        className="signup_model"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Body>
          <div className="signup_model_block">
            <div className="signup_model_conte">
              <h3>Otp Verification</h3>
              <p className="great_text">Let’s build something great</p>
              <p className="otp_text">
                we will send you a one time password on Your {" "}
                <span> +{watch('phoneNumber')}</span>
              </p>
              <form>
                <div className="signup_opt_box">
                  <OTPInput
                    value={OTP}
                    onChange={setOTP}
                    autoFocus
                    OTPLength={4}
                    otpType="number"
                    disabled={false}
                    secure
                  />
                </div>
              </form>
              <p className="recevice_taxt">Don’t Recevice Otp?</p>
              <div className="respond_otp_link">
              <a onClick={handleResendOTP} style={{cursor:'pointer'}} >Resend Otp</a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Signup;
