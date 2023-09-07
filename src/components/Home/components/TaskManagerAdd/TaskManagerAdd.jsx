import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import addImg from "../../../../images/add.png";
import ButtonSecondary from "../../../Buttons/ButtonSecondary";
import { useNavigate } from "react-router-dom";

const TaskManagerAdd = () => {
  const navigate = useNavigate();
  const navigateToTarget = () => {
    navigate("/task-manager");
  };
  return (
    <div>
      <Layout>
        <div className=" my-14 px-8 bg-primary text-slate-200 dark:bg-slate-800 rounded-md shadow-lg grid grid-cols-1 lg:grid-cols-2 items-center justify-between h-full">
          <div className=" space-y-5">
            <h5 className=" text-3xl font-semibold">Are You Ready?..</h5>
            <p>
              একজন দক্ষ প্রোগ্রমার হতে চাইলে এই কোর্সে জয়েন করো। শিখতে গেলে যা
              যা লাগবে সেগুলো প্রোভাইড করব আমরা তোমার শুধু লেগে থাকতে হবে, হার্ড
              ওয়ার্ক করতে হবে।
            </p>
            <ButtonSecondary onClick={navigateToTarget} text={"Try it Now"} />
          </div>
          <div className=" flex justify-center max-h-full">
            <img src={addImg} alt="add" className=" w-3/5 object-cover" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TaskManagerAdd;
