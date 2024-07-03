import { useLoaderData } from "react-router-dom";
import AvatarSelector from "../components/profile/avatar-selector";
import PhoneNum from "../components/profile/phone-number";
import { ProfileLoaderData } from "../types/types";

interface DefaulDataType {
  image: string;
  phoneNumber: string;
}
export default function Profile() {
  const data = useLoaderData();

  const defaulData = data as DefaulDataType;
  const defaultAvatar = defaulData.image;
  const defaultPhone = defaulData.phoneNumber;

  return (
    <div className="bg-white w-3/4 border border-solid border-black p-4 shadow-md rounded">
      <h1 className="text-3xl text-blue-700">اطلاعات کاربری</h1>

      <div className="flex pt-8 h-64">
        <AvatarSelector defaultAvatar={defaultAvatar} />
        {/* <AvatarSelector /> */}

        <PhoneNum defaultBio={defaultPhone} />
        {/* <PhoneNum /> */}
      </div>
    </div>
  );
}
