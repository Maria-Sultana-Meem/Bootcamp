import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const serviceCenter = useLoaderData();

  const { register, control, handleSubmit } = useForm();

  // watch senderRegion properly
  const riderRegion = useWatch({ control, name: "region" });

  // get unique regions
  const regionsDupli = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDupli)];

  // get districts by region
  const districtByRegion = (region) => {
    if (!region) return [];
    return serviceCenter
      .filter((c) => c.region === region)
      .map((d) => d.district);
  };

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",

          title: "Parcel has created. Please Pay!",
          text: "Your application has been submited.We will reach to you in 30 days",
          showConfirmButton: false,
          timer: 2000,
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl text-left">Be a Rider</h2>

      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="text-black"
      >
        {/* sender details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-semibold text-left text-2xl">Sender Details</h2>
            <fieldset className="fieldset">
              <label className="label">Rider Name</label>
              <input
                type="text"
                className="input w-full"
                defaultValue={user?.displayName}
                {...register("name")}
                placeholder=" Name"
              />
              <label className="label"> Email</label>
              <input
                type="email"
                className="input w-full"
                defaultValue={user?.email}
                {...register("email")}
                placeholder="Email"
              />

              {/* Sender Region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-left"> Region</legend>
                <select
                  {...register("region")}
                  defaultValue=""
                  className="select w-full"
                >
                  <option value="" disabled>
                    Pick a Region
                  </option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Sender District */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-left">
                  {" "}
                  Districts
                </legend>
                <select
                  {...register("district")}
                  defaultValue=""
                  className="select w-full"
                >
                  <option value="" disabled>
                    Pick a district
                  </option>
                  {districtByRegion(riderRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              <label className="label mt-3">Your Address</label>
              <input
                type="text"
                className="input w-full"
                {...register("address")}
                placeholder=" Address"
              />
            </fieldset>
          </div>

          {/* receiver details */}
          <div>
            <h2 className="font-semibold text-left text-2xl">More Details</h2>
            <fieldset className="fieldset">
              <label className="label">Driving License</label>
              <input
                type="text"
                className="input w-full"
                {...register("license")}
                placeholder="Driving License"
              />
              <label className="label">NID</label>
              <input
                type="text"
                className="input w-full"
                {...register("nid")}
                placeholder="NID"
              />

              <label className="label mt-3">BIKE</label>
              <input
                type="text"
                className="input w-full"
                {...register("bike")}
                placeholder="Bike"
              />
            </fieldset>
          </div>
        </div>

        <div className="text-left mt-5">
          <input
            type="submit"
            className="btn btn-primary text-black"
            value="Apply as a Rider"
          />
        </div>
      </form>
    </div>
  );
};

export default Rider;
