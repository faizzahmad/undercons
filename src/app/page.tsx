"use client";
import { useState } from "react";
import CustomVideo from "./_components/CustomVideo";
import { goldenBook } from "./fonts";
import { BiLoader } from "react-icons/bi";
 import { ToastContainer, toast } from 'react-toastify';
  

const Page = () => {
  const [name, setName] =  useState("");
  const [phoneNo, setPhoneNo] =  useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phoneNo }),
      });

      const data = await response.json();
      setName("");
      setPhoneNo("");
      if (data.success){
         toast.success("Thank you! We'll be in touch soon.");
      }

    
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
     
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className={`w-full h-screen flex items-center justify-center p-5 bg-[#674158] flex-col overflow-y-auto ${goldenBook.className}`}>
     <div className="max-w-[350px]">
      <CustomVideo
      src="/images/lonnue.mp4"
      />
     </div>

     <div className="min-w-[250px] max-w-[600px]  bg-[#EFEDE3] py-5 md:px-10 px-5 rounded-4xl mt-5 flex justify-center flex-col items-center gap-4">
      <div className="md:w-[70%]">
          <h5 className={`text-[#674158] md:text-2xl text-lg text-center uppercase`}>WE&apos;RE crafting a new standard for body care, Piece by piece </h5>
        <p className="md:text-lg text-sm text-[#674158] text-center">
          Until then....<br />
          leave your details to stay in the loop.
          </p>
      </div>

      <form className="w-full flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
        <input
         className=" bg-white rounded-none  text-[#674158] outline-none border-none focus:outline-none p-2 w-full placeholder:text-[#674158]"
         placeholder="Name:"
         value={name}
         onChange={(e) => setName(e.target.value)}
        />

         <input
         className=" bg-white rounded-none text-[#674158] outline-none border-none focus:outline-none p-2 w-full placeholder:text-[#674158]"
         type="number"
         placeholder="Phone Number:"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />

        <button className="py-3 bg-[#674158] flex gap-1 justify-center items-center text-lg text-[#EFEDE3] font-semibold w-[150px] rounded-full disabled:opacity-50 "
        disabled={loading}
        >
          {
            loading && (<BiLoader className=" animate-spin"/>)
          }
          notify me!
        </button>
      </form>
      </div>
 <ToastContainer position="top-right" />
    </div>
    );
}
 
export default Page;