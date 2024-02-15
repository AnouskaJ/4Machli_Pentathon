import User from "../mock-data/userdata";

export default function Profile(index){
  index = 1;
  const user = User[index];
  return (
    <div className="flex justify-center overflow-y-clip items-center h-screen bg-gradient-to-b from-[#aad0f5] via-[#c4def9] to-white">
      <div className="max-w-md mx-auto bg-gradient-to-b from-[#aad0f5] via-[#c4def9] to-white md:bg-gradient-to-b md:from-white md:to-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8 ">
          <img
            src="https://source.unsplash.com/1600x900/?hospital"
            alt="hospital"
            className="h-32 w-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold">Welcome {user.name},</h1>
        </div>
        <div className="text-left">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Username:</strong> {user.username}
            </div>
            <div>
              <strong>DOB:</strong> {user.DOB}
            </div>
            <div>
              <strong>Age:</strong> {user.age}
            </div>
            <div>
              <strong>Gender:</strong> {user.gender}
            </div>
            <div>
              <strong>Blood Group:</strong> {user.blood_group}
            </div>
            <div>
              <strong>Contact Number:</strong> {user.contact_number}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div className="col-span-2">
              <strong>Allergies:</strong> {user.allergies.join(", ")}
            </div>
            <div className="col-span-2">
              <strong>Past Surgeries:</strong>
              <div className="mt-2 max-h-24 overflow-y-auto scrollbar-thin">
                {user.past_surgeries.map((surgery, index) => (
                  <p key={index}>{`${index + 1}. ${surgery}`}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
