import React from "react";
import { Layout } from "./shared/Layout/Layout";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import paymentImg from "../images/payments.f8a603e8.png";

const DesktopFooter = () => {
  return (
    <div className=" lg:mt-56">
      <hr className=" h-1 bg-primary w-full" />
      <div className=" bg-secondary text-slate-200">
        <Layout>
          <div className=" space-y-5 pt-24">
            <div className=" grid grid-cols-1 lg:grid-cols-3 justify-between items-start">
              <div className=" flex flex-col space-y-5">
                <h2 className="text-2xl font-semibold">
                  <span className="text-primary">CODE</span>MASTER
                </h2>
                <div className=" flex items-center gap-2">
                  <MapPinIcon className=" h-5 w-5" />
                  <h4 className=" text-lg font-medium">
                    Level-4, 34, Awal Centre, Banani, Dhaka
                  </h4>
                </div>
                <div className=" flex items-center gap-2">
                  <EnvelopeIcon className=" h-5 w-5" />
                  <h4 className=" text-lg font-medium">
                    Official:{" "}
                    <NavLink className=" hover:underline">
                      shakilahmmed252@gmail.com
                    </NavLink>
                  </h4>
                </div>
                <div className=" flex items-center gap-2">
                  <PhoneIcon className=" h-5 w-5" />
                  <h4 className=" text-lg font-medium">
                    Helpline:
                    <NavLink className=" hover:underline mx-1">
                      +88 01796282969
                    </NavLink>
                    <span className=" text-sm">
                      ( Available 10:00 AM - 5:00 PM )
                    </span>
                  </h4>
                </div>
              </div>
              <div className=" flex justify-start lg:justify-center ">
                <div className=" flex flex-col space-y-3">
                  <h2 className="text-xl font-semibold text-left">
                    <span className="text-primary">Useful Links</span>
                  </h2>
                  <NavLink className=" hover:underline text-left">
                    Refund policy
                  </NavLink>
                  <NavLink className=" hover:underline text-left">
                    Terms and Conditions
                  </NavLink>
                  <NavLink className=" hover:underline text-left">
                    Privacy Policy
                  </NavLink>
                  <NavLink className=" hover:underline text-left">
                    About us
                  </NavLink>
                </div>
              </div>
              <div className=" flex flex-col items-center">
                <div className=" flex flex-col justify-start space-y-5">
                  <h2 className="text-xl font-semibold text-left">
                    <span className="text-primary">Social Media Link</span>
                  </h2>
                  <div className=" grid grid-cols-5 gap-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#039be5"
                          d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#0288D1"
                          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 64 64"
                        style={{ fill: "#FFFFFF" }}
                      >
                        <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <radialGradient
                          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                          cx="19.38"
                          cy="42.035"
                          r="44.899"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#fd5"></stop>
                          <stop offset=".328" stop-color="#ff543f"></stop>
                          <stop offset=".348" stop-color="#fc5245"></stop>
                          <stop offset=".504" stop-color="#e64771"></stop>
                          <stop offset=".643" stop-color="#d53e91"></stop>
                          <stop offset=".761" stop-color="#cc39a4"></stop>
                          <stop offset=".841" stop-color="#c837ab"></stop>
                        </radialGradient>
                        <path
                          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                        ></path>
                        <radialGradient
                          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                          cx="11.786"
                          cy="5.54"
                          r="29.813"
                          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#4168c9"></stop>
                          <stop
                            offset=".999"
                            stop-color="#4168c9"
                            stop-opacity="0"
                          ></stop>
                        </radialGradient>
                        <path
                          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                        ></path>
                        <circle
                          cx="31.5"
                          cy="16.5"
                          r="1.5"
                          fill="#fff"
                        ></circle>
                        <path
                          fill="#fff"
                          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1"
                          x1="9.816"
                          x2="41.246"
                          y1="9.871"
                          y2="41.301"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#f44f5a"></stop>
                          <stop offset=".443" stop-color="#ee3d4a"></stop>
                          <stop offset="1" stop-color="#e52030"></stop>
                        </linearGradient>
                        <path
                          fill="url(#PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1)"
                          d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"
                        ></path>
                        <path
                          d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z"
                          opacity=".07"
                        ></path>
                        <path
                          fill="#fff"
                          d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6 className=" bg-primary shadow-lg text-gray-200 font-medium rounded-md p-3">
                      App Coming Soon!
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Payment options */}
            <div>
              <img src={paymentImg} alt="payment-options" className=" w-full" />
            </div>
            <hr className=" h-1 bg-primary w-full" />
            <div className=" hidden md:grid grid-cols-3 items-center justify-between">
              <p>Lisence: Demo lisence</p>
              <p className=" text-center">
                copyright &copy; 2023. Shakil Ahmmed Joy
              </p>
              <p className=" text-right">v 1.0.0</p>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default DesktopFooter;
