import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import PhoneInputComponent from "../../../shared/Input/PhoneInputComponent";
import DateSelect from "../DateSelect/DateSelect";
import TimeSelect from "../../../TimeSelect/TimeSelect";

const Contact = () => {
  return (
    <div>
      <Layout>
        <div className=" my-14 py-14 bg-primary text-slate-200 dark:bg-slate-800 rounded-md shadow-lg">
          <div className=" mx-0 lg:mx-3 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
            <div>
              <div className=" flex items-center justify-center">
                <div className=" w-full space-y-5 lg:w-3/4 bg-slate-100 dark:bg-slate-800 text-primary p-3 rounded-md shadow-lg">
                  <h4
                    className=" text-xl font-semibold
                "
                  >
                    Book Your Call
                  </h4>
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      className=" h-14 px-3 text-lg w-full border-solid border-2  rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      className=" h-14 px-3 text-lg w-full border-solid border-2  rounded-md"
                    />
                  </div>

                  <div>
                    <PhoneInputComponent />
                  </div>
                  <DateSelect />
                  <TimeSelect />
                  <button className=" bg-primary px-3 text-gray-200 w-full rounded-md py-2 rounded-m border-solid border-2 border-transparent hover:bg-transparent dark:hover:bg-gray-200 hover:scale-95 transition-all duration-200 delay-100 ease-in-out hover:text-primary hover:border-primary">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-end space-y-6">
              <div>
                <h3 className=" text-xl lg:text-2xl font-semibold">
                  ফ্রি কলে পরামর্শ নিন
                </h3>
                <h3 className=" text-xl lg:text-2xl font-semibold">
                  ক্যারিয়ার কাউন্সিলরের কাছ থেকে
                </h3>
              </div>
              <p>
                আপনি যেন সঠিক ক্যারিয়ার সিদ্ধান্ত নিতে পারেন, তার জন্য আমরা
                দিচ্ছি ফ্রি ক্যারিয়ার কাউন্সেলিং সাপোর্ট। ক্যারিয়ার নিয়ে আপনার
                বিভিন্ন প্রশ্নের উত্তর পাবেন অভিজ্ঞ ক্যারিয়ার কাউন্সেলরদের কাছ
                থেকে।
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
