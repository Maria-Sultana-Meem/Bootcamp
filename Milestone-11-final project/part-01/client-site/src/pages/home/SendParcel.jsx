import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const { register, control, handleSubmit, } = useForm();
    const axiosSecure = useAxiosSecure()
    const {user}= useAuth()
    const navigate = useNavigate();

  const serviceCenter = useLoaderData();
  const regionsDupli = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDupli)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  const districtByRegin = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    let cost = 0;
    const parcelWeight = parseFloat(data.parcelWeight);
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
  
    data.cost = cost
    
    Swal.fire({
      title: "Agree with the cost?",
      text:`You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm and Continue Payment",
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.post('/parcels',data)
        .then(res=>{
          console.log('after saving data',res.data);
          if (res.data.insertedId) {
            navigate('/dashboard/myParcel')
             Swal.fire({
              position:"top-end",

          title: "Parcel has created. Please Pay!",
          text: "Your file has been deleted.",
          showConfirmButton:false,
          timer:2500,
          icon:'success'
        });
          }
          
        })
       
      }
    });
  };
  return (
    <div className="mt-20 bg-white rounded-md p-10">
      <h2 className="font-bold text-4xl text-left">Send a Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="text-black">
        {/* document */}
        <div className="text-left mt-3">
          <label className="label mr-3">
            <input
              type="radio"
              value="document"
              className="radio"
              {...register("parcelType")}
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              value="non-document"
              className="radio"
              {...register("parcelType")}
            />
            Non Document
          </label>
        </div>
        {/* parcel info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              className="input w-full"
              {...register("parcelName")}
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight(kg)</label>
            <input
              type="number"
              className="input w-full"
              {...register("parcelWeight")}
              placeholder="Parcel weight"
            />
          </fieldset>
        </div>

        {/* two colum */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* sender details */}
          <div>
            <h2 className="font-semibold text-left text 2xl">Sender Details</h2>
            <fieldset className="fieldset">
              <label className="label">Sender Name</label>
              <input
                type="text"
                className="input w-full"
                defaultValue={user?.displayName}
                {...register("senderName")}
                placeholder="Sender Name"
              />
              <label className="label">Sender Email</label>
              <input
                type="email"
                className="input w-full"
                defaultValue={user?.email}
                {...register("senderEmail")}
                placeholder="Sender Email"
              />
              {/* seder region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-left">
                  Sender Region
                </legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a Region"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-left">
                  Sender Districts
                </legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a distict"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtByRegin(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <label className="label mt-3">Sender Address</label>
              <input
                type="text"
                className="input w-full"
                {...register("senderAddress")}
                placeholder="Sender Address"
              />
            </fieldset>
          </div>

          {/* receiver details */}
          <div>
            <h2 className="font-semibold text-left text 2xl">
              Receiver Details
            </h2>
            <fieldset className="fieldset">
              <label className="label">Reciver Name</label>
              <input
                type="text"
                className="input w-full"
                {...register("receiverName")}
                placeholder="Receiver Name"
              />
              <label className="label">Receiver Email</label>
              <input
                type="email"
                className="input w-full"
                {...register("receiverEmail")}
                placeholder="Receiver Email"
              />
              {/* receiver reo */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-left">
                  Receiver Region
                </legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a Region"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-left">
                  Receiver Districts
                </legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a distict"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtByRegin(receiverRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <label className="label mt-3">Receiver Address</label>
              <input
                type="text"
                className="input w-full"
                {...register("receiverAddress")}
                placeholder="Receiver Address"
              />
            </fieldset>
          </div>
        </div>
        <div className="text-left">
          <input
            type="submit"
            className="btn btn-primary text-black "
            value="send parcel"
          />
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
