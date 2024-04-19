// import React, { useState } from "react";
// import axios from "axios";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
// import Openingstatus from "./Openingstatus";

// const Opening = () => {
//   const [accountType, setAccountType] = useState("Current Account");
//   const [panNumber, setPanNumber] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [cifNumber, setCifNumber] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [address, setAddress] = useState("");
//   const [gstin, setGstin] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");

//   const [showOpeningstatus, setShowOpeningstatus] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       customerName,
//       accountNumber,
//       accountType,
//       panNumber,
//       address,
//       phone_number: phoneNumber,
//       gstin,
//       cifNumber,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:8081/mta/merchant/createAccount",
//         data
//       );

//       // Handle success, redirect, or any other logic here
//       console.log("Account created successfully!", response.data);
//     } catch (error) {
//       console.error("Error creating account:", error.message);
//       // Handle error, display a message to the user, or perform other error handling logic
//     }
//     setShowOpeningstatus(true);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="open-container flex">
//         <div>
//           <Sidebar />
//         </div>

//         <div className="Opening-page">
//           <div className="flex m-4 p-10 space-x-20 ml-20">
//             <div className="left">
//               <div className=" flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="accountNumber">
//                   Account Number :{" "}
//                 </label>
//                 <input
//                   type="text"
//                   id="accountNumber"
//                   className=" block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(e) => setAccountNumber(e.target.value)}
//                 />
//               </div>

//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="customerName">
//                   Customer Name :{" "}
//                 </label>
//                 <input
//                   type="text"
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   id="customerName"
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                 />
//               </div>

//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="address">
//                   Address :{" "}
//                 </label>
//                 <input
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="address"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                 />
//               </div>

//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="gstin">
//                   GSTIN :{" "}
//                 </label>

//                 <input
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="gstin"
//                   value={gstin}
//                   onChange={(e) => setGstin(e.target.value)}
//                 />
//               </div>

//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="branch">
//                   Branch Code :{" "}
//                 </label>
//                 <input
//                   type="text"
//                   id="branch"
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="right">
//               <div className="space-x-16 p-2">
//                 <label className="w-[22ch]" htmlFor="accountType">
//                   Account Type :{" "}
//                 </label>
//                 <select
//                   className="py-2 px-20"
//                   id="accountType"
//                   value={accountType}
//                   onChange={(e) => setAccountType(e.target.value)}
//                 >
//                   <option value="Current Account">Current Account</option>
//                   <option value="Savings">Saving Account</option>
//                 </select>
//               </div>

//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="panNumber">
//                   PAN Number :{" "}
//                 </label>
//                 <input
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="panNumber"
//                   value={panNumber}
//                   onChange={(e) => setPanNumber(e.target.value)}
//                 />
//               </div>
//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="phoneNumber">
//                   Phone Number :{" "}
//                 </label>
//                 <input
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="phoneNumber"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="cifNumber">
//                   CIF Number :{" "}
//                 </label>
//                 <input
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="cifNumber"
//                   value={cifNumber}
//                   onChange={(e) => setCifNumber(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="m-4 p-8 space-x-80 ml-96">
//             <button
//               className="text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-xl text-lg"
//               onClick={handleSubmit}
//             >
//               Submit
//             </button>
//             <button className="text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-xl text-lg">
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//       {showOpeningstatus && (
//         <Openingstatus onClose={() => setShowOpeningstatus(false)} />
//       )}
//     </div>
//   );
// };

// export default Opening;





// import React, { useState } from "react";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
// import Openingstatus from "./Openingstatus";
// import { useNavigate } from 'react-router-dom';

// function Opening() {
//   const [showOpeningstatus, setShowOpeningstatus] = useState(false);
//   const [apiResponse, setApiResponse] = useState(null);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     accountNumber: '',
//     customerName: '',
//     address: '',
//     gstin: '',
//     branchCode: '',
//     accountType: 'Current Account',
//     panNumber: '',
//     phoneNumber: '',
//     cifNumber: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(import.meta.env.VITE_CREATEACCOUNT_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       setApiResponse(data);
//       setShowOpeningstatus(true);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   function handleHold() {
//     navigate('/merchant-hold');
//   }

//   return (
//     <>
//       <div>
//         <Navbar />
//         <div className="flex">
//           <Sidebar />
//           <div className="bg-white p-12 rounded-lg shadow-md relative w-[svw]">
//             <div className="grid grid-cols-2 gap-32 mb-10">
//               <div>
//                 <div className="mb-4 grid grid-cols-2 gap-10">
//                   <span className="font-semibold">Account Number:<span className="text-red-500">*</span></span>
//                   <input
//                     className="border border-black px-10 rounded-full"
//                     name="accountNumber"
//                     value={formData.accountNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 grid grid-cols-2 gap-10">
//                   <span className="font-semibold">Customer Name:<span className="text-red-500">*</span></span>
//                   <input
//                     className="border border-black px-10 rounded-full"
//                     name="customerName"
//                     value={formData.customerName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 grid grid-cols-2 gap-10">
//                   <span className="font-semibold">Address:<span className="text-red-500">*</span></span>
//                   <input
//                     className="border border-black px-10 rounded-full"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 grid grid-cols-2 gap-10">
//                   <span className="font-semibold">gstin:<span className="text-red-500">*</span></span>
//                   <input
//                     className="border border-black px-10 rounded-full"
//                     name="gstin"
//                     value={formData.gstin}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 grid grid-cols-2 gap-10">
//                   <span className="font-semibold">Branch Code:<span className="text-red-500">*</span></span>
//                   <input
//                     className="border border-black px-10 rounded-full"
//                     name="branchCode"
//                     value={formData.branchCode}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>


//               <div>
//                 <div className="mb-4 grid grid-cols-2 gap-10">
//                   <span className="font-semibold">Account Type:<span className="text-red-500">*</span></span>
//                   <select
//                     className="border border-black px-10 rounded-full"
//                     name="accountType"
//                     value={formData.accountType}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="Current Account">Current Account</option>
//                     <option value="Saving Account">Saving Account</option>
//                   </select>
//                 </div>
//                 <div className="mb-4 grid grid-cols-2 gap-10">
//                   <span className="font-semibold">PAN Number:<span className="text-red-500">*</span></span>
//                   <input
//                     className="border border-black px-10 rounded-full"
//                     name="panNumber"
//                     value={formData.panNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 grid grid-cols-2 gap-10">
//                   <span className="font-semibold">Phone Number:<span className="text-red-500">*</span></span>
//                   <input
//                     className="border border-black px-10 rounded-full"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-4 grid grid-cols-2 gap-10">
//                   <span className="font-semibold">CIF Number:<span className="text-red-500">*</span></span>
//                   <input
//                     className="border border-black px-10 rounded-full"
//                     name="cifNumber"
//                     value={formData.cifNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-24">
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </button>
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onClick={handleHold}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//         {showOpeningstatus && (
//           <Openingstatus
//             onClose={() => setShowOpeningstatus(false)}
//             apiResponse={apiResponse}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// export default Opening;
















import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Openingstatus from "./Openingstatus";
import { useNavigate } from 'react-router-dom';

function Opening() {
  const [showOpeningstatus, setShowOpeningstatus] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    accountNumber: '',
    customerName: '',
    address: '',
    gstin: '',
    branchCode: '',
    accountType: 'Currents',
    panNumber: '',
    phoneNumber: '',
    cifNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'panNumber') {
      const panRegex = /^[A-Z0-9]+$/;
      if (panRegex.test(value) || value === '') {
        setFormData({ ...formData, [name]: value.toUpperCase() });
      }
    } else if (name === 'phoneNumber') {
      const phoneRegex = /^[0-9]+$/;
      if (phoneRegex.test(value) || value === '') {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'customerName') {
      const nameRegex = /^[a-zA-Z ]+$/;
      if (nameRegex.test(value) || value === '') {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(import.meta.env.VITE_CREATEACCOUNT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setApiResponse(data);
      setShowOpeningstatus(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function handleLanding() {
    navigate('/landing');
  }

  const isFormValid = Object.values(formData).every(value => value.trim() !== '');


  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="bg-white p-12 rounded-lg shadow-md relative w-[svw]">
            <h1 className="text-2xl font-bold mb-8">Merchant Addition</h1>
            <div className="grid grid-cols-2 gap-32 mb-10">
              <div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Account Number:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Customer Name:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Address:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">GSTIN:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="gstin"
                    value={formData.gstin}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Branch Code:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="branchCode"
                    value={formData.branchCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>


              <div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Account Type:<span className="text-red-500">*</span></span>
                  <select
                    className="border border-black px-10 rounded-full"
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                    required
                  >
                    <option value="Currents">Currents</option>
                    <option value="Savings">Savings</option>
                  </select>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">PAN Number:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Phone Number:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">CIF Number:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="cifNumber"
                    value={formData.cifNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-24">
              <button
                className={`mt-4 px-4 py-2  text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${isFormValid ? 'bg-blue-500' : 'bg-blue-300 hover:bg-blue-300'}`}
                onClick={handleSubmit}
                disabled={!isFormValid}
              >
                Submit
              </button>
              <button
                className="mt-4 px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleLanding}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
        {showOpeningstatus && (
          <Openingstatus
            onClose={() => setShowOpeningstatus(false)}
            apiResponse={apiResponse}
          />
        )}
      </div>
    </>
  );
}

export default Opening;
