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

  if (!name || !phoneNo) {
  toast.error("Please fill in all fields.");
  return;
}
const phoneRegex = /^[0-9]+$/;
if (!phoneRegex.test(phoneNo)) {
  toast.error("Phone number must contain only numbers.");
  return;
}
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
  <>
    <div className={`w-full relative  flex md:hidden md:items-center md:justify-center md:pt-4 md:pb-4 pb-4 pt-0 px-4 md:h-auto h-[110vh]  bg-[#613753] md:bg-[#613753] flex-col overflow-y-auto ${goldenBook.className}`}>
     <div className="w-[80%] hidden md:block h-full">
      {/* <CustomVideo
      src="/images/4.mp4"
      /> */}

      <img src="/images/4.gif" alt="" className="w-full h-full" />
     </div>

      <div className="w-full  md:hidden">
         <img src="/images/3.gif" alt="" className="w-full h-autp" />
      {/* <CustomVideo
      src="/images/3.mp4"
      /> */}
     </div>

   <div className="p-4 md:p-0 md:static absolute left-0 right-0 bottom-0 w-full flex justify-center">
      <div className="min-w-[250px]  max-w-[600px]  bg-[#EFEDE3] py-5 md:px-10 px-5 rounded-4xl md:mt-5 flex justify-center flex-col items-center gap-4">
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
         placeholder="Phone Number:"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />

        <button className="py-3 bg-[#66435a] md:bg-[#734962] flex gap-1 justify-center items-center text-lg text-[#EFEDE3] font-semibold w-[150px] rounded-full disabled:opacity-50 "
        disabled={loading}
        >
          {
            loading && (<BiLoader className=" animate-spin"/>)
          }
          notify me!
        </button>
      </form>
      </div>
   </div>
    </div>







      <div className={`w-full relative hidden md:flex items-center justify-center  h-screen    bg-[#613753] md:bg-[#613753]  overflow-y-auto ${goldenBook.className}`}>
     <div className="w-[70%] h-full flex items-center">
 

      <img src="/images/4.gif" alt="" className="w-full h-auto" />
     </div>

   

    <div className="w-[30%] bg-[#EFEDE3] h-full py-5 md:px-10 px-5 rounded-tl-4xl rounded-bl-4xl  flex justify-center flex-col items-center gap-4">
      <div className="md:w-[100%]">
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
         placeholder="Phone Number:"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />

        <button className="py-3 bg-[#66435a] md:bg-[#734962] flex gap-1 justify-center items-center text-lg text-[#EFEDE3] font-semibold w-[150px] rounded-full disabled:opacity-50 "
        disabled={loading}
        >
          {
            loading && (<BiLoader className=" animate-spin"/>)
          }
          notify me!
        </button>
      </form>
      </div>
    </div>
    <ToastContainer position="top-right" />
  </>
    );
}
 
export default Page;