import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Line from "../../../shared/Line";
import basicImg from "../../../../images/roadmap1.png";
import dataSrtuctureImg from "../../../../images/roadmap2.png";
import algoImg from "../../../../images/roadmap3.png";
import oopImg from "../../../../images/roadmap4.png";
import awsImg from "../../../../images/roadmap5.png";
import solvingImg from "../../../../images/roadmap6.png";

const RoadMap = () => {
  return (
    <div className=" pb-28">
      <Layout>
        <div>
          <h5 className=" text-3xl font-semibold">
            Cpmplete Journey to Become a Programmer
          </h5>
          <Line prop={"mb-16"} />
          <div className=" relative">
            <div className=" grid grid-cols-1 lg:grid-cols-2 lg:mx-40 space-y-6 lg:space-y-32 justify-between items-center">
              <div className=" flex items-center gap-3 lg:gap-10">
                <div className=" text-right">
                  <h6 className="text-lg font-semibold">Basic programming</h6>
                  <p>
                    প্রোগ্রামিং এর পঞ্চরত্ন (ভ্যারিয়েবল, কন্ডিশন, লুপ, ফাংশন,
                    অ্যারে) সহ স্ট্রিং, পয়েন্টার, প্রবলেম সল্ভিং শেখানো হবে সি
                    প্রোগ্রামিং ব্যবহার করে।
                  </p>
                </div>
                <div className="p-2 border-solid border-2 border-primary rounded-full">
                  <div className=" p-4 bg-slate-400 rounded-full">
                    <img
                      src={basicImg}
                      alt="basic-programming"
                      className="w-48"
                    />
                  </div>
                </div>
              </div>
              <div
                className=" hidden lg:flex lg:justify-center text-primary"
                style={{ marginTop: "-10px" }}
              >
                <div>
                  <h2 className=" text-5xl font-semibold">01</h2>
                </div>
              </div>
              {/* 2 */}
              <div className=" hidden lg:flex lg:justify-center">
                <div>
                  <h2 className=" text-5xl font-semibold text-primary">02</h2>
                </div>
              </div>
              <div className=" flex items-center gap-3 lg:gap-10">
                <div className="p-2 border-solid border-2 border-primary rounded-full">
                  <div className=" p-4 bg-slate-400 rounded-full">
                    <img
                      src={dataSrtuctureImg}
                      alt="basic-programming"
                      className="w-48"
                    />
                  </div>
                </div>
                <div className=" text-left">
                  <h6 className="text-lg font-semibold">Data Structures</h6>
                  <p>
                    স্ট্যাক, কিউ, প্রাউরিটি কিউ, সার্কুলার কিউ, লিংকড লিস্ট,
                    ডাবলিউ লিংকড লিস্ট, হিপ, হ্যাশ, ট্রি ডেটা স্ট্রাকচারের
                    ব্যাসিক টু এডভান্স শেখানো হবে এই কোর্সে।
                  </p>
                </div>
              </div>
              {/* 2 */}
              {/* 3 */}

              <div className=" flex items-center gap-3 lg:gap-10">
                <div className=" text-right">
                  <h6 className="text-lg font-semibold">Algorithms</h6>
                  <p>
                    বাইনারি সার্চ, লিনিয়ার সার্চ, বাবল সর্ট, মার্জ সর্ট, কুইক
                    সর্ট এলগরিদম , প্রিমস, ক্রুসকাল, ডায়াস্ট্রা , ডায়নামিক
                    প্রোগ্রামিং , বেলম্যান ফর্ড এডভান্স টপিকগুলো ধরে ধরে শেখানো
                    হবে।
                  </p>
                </div>
                <div className="p-2 border-solid border-2 border-primary rounded-full">
                  <div className=" p-4 bg-slate-400 rounded-full">
                    <img
                      src={algoImg}
                      alt="basic-programming"
                      className="w-48"
                    />
                  </div>
                </div>
              </div>
              <div className=" hidden lg:flex lg:justify-center">
                <div>
                  <h2 className=" text-5xl font-semibold text-primary">03</h2>
                </div>
              </div>
              {/* 3 */}
              {/* 4 */}

              <div className=" hidden lg:flex lg:justify-center">
                <div>
                  <h2 className=" text-5xl font-semibold text-primary">04</h2>
                </div>
              </div>
              <div className=" flex items-center gap-3 lg:gap-10">
                <div className="p-2 border-solid border-2 border-primary rounded-full">
                  <div className=" p-4 bg-slate-400 rounded-full">
                    <img
                      src={oopImg}
                      alt="basic-programming"
                      className="w-64"
                    />
                  </div>
                </div>
                <div className=" text-left">
                  <h6 className="text-lg font-semibold">OOP & Database</h6>
                  <p>
                    পাইথন দিয়ে অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং এর প্রিন্সিপলগুলো
                    যেমন - ইনহেরিটেন্স, এনক্যাপসুলেশন, পলিমরফিজম, ডিজাইন
                    প্যাটার্ন এবং ডেটাবেজ ডিজাইন, ডেটাবেজের বিভিন্ন কুয়েরি সহ
                    ডেটাবেজ ইন্টিগ্রিটি, সিকিউরিট দেখানো হবে এই কোর্সে।
                  </p>
                </div>
              </div>
              {/* 4 */}
              {/* 5 */}

              <div className=" flex items-center gap-3 lg:gap-10">
                <div className=" text-right">
                  <h6 className="text-lg font-semibold">
                    Cloud Computing / AWS
                  </h6>
                  <p>
                    ক্লাউন্ড কম্পিউটিং এর ব্যাসিক জিনিসগুলো যেমন ক্লাউড
                    কম্পিউটিং কি, ডেপ্লয়মেন্ট মডেল, সার্ভিস মডেল, কম্পোনেন্ট অফ
                    ক্লাউন্ড কম্পিউটিং, কি-ক্লাউড সার্ভিস সহ আরো কিছু ব্যাসিক
                    জিনিস দেখানো হবে এই কোর্সে।
                  </p>
                </div>
                <div className="p-2 border-solid border-2 border-primary rounded-full">
                  <div className=" p-4 bg-slate-400 rounded-full">
                    <img
                      src={awsImg}
                      alt="basic-programming"
                      className="w-64"
                    />
                  </div>
                </div>
              </div>
              <div className=" hidden lg:flex lg:justify-center">
                <div>
                  <h2 className=" text-5xl font-semibold text-primary">05</h2>
                </div>
              </div>
              {/* 5 */}
              {/* 6 */}

              <div className=" hidden lg:flex lg:justify-center">
                <div>
                  <h2 className=" text-5xl font-semibold text-primary">06</h2>
                </div>
              </div>
              <div className=" flex items-center gap-3 lg:gap-10">
                <div className="p-2 border-solid border-2 border-primary rounded-full">
                  <div className=" p-4 bg-slate-400 rounded-full">
                    <img
                      src={solvingImg}
                      alt="basic-programming"
                      className="w-64"
                    />
                  </div>
                </div>
                <div className=" text-left">
                  <h6 className="text-lg font-semibold">Problem Solving</h6>
                  <p>
                    ব্যাসিক প্রোগ্রামিং থেকে শুরু করে এলগরিদম কোর্স পর্যন্ত ৫০০
                    - ৬০০ প্রবলেম সল্ভিং করানো হবে। এছাড়া প্রতিমাসে ইন্ট্রা
                    ফাইট্রোন প্রোগ্রামিং কন্টেস্ট সহ ২০ - ২৫ টি প্রোগ্রামিং
                    কন্টেস্টে করানো হবে। এতে করে তোমরা নিজেদের দক্ষতা যাচাই করতে
                    পারবে।
                  </p>
                </div>
              </div>
              {/* 6 */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default RoadMap;
