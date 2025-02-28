import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <img
        src="/images/profile-me.png"
        alt="profile"
        className="size-6 sm:size-[40px] md:size-[60px] rounded-2xl"
      />
      <div className="md:inline-block hidden">
        <h2 className="text-base font-medium font-poppins text-blueDark leading-6">
          mehedi
        </h2>
        <p className="text-secondary text-sm leading-5 font-poppins">admin</p>
      </div>
    </div>
  );
};

export default Profile;
