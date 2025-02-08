import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { CgProfile } from 'react-icons/cg';
import Swal from 'sweetalert2';

export default function Profile() {
  const { user, updateProfiledata, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  // 🔹 Function to handle profile update
  const handleUpdateProfile = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Update Profile",
      html: `
        <input id="swal-input-name" class="swal2-input" value="${name}" placeholder="Enter Name">
        <input id="swal-input-email" class="swal2-input" value="${email}" placeholder="Enter Email" disabled>
        <input id="swal-input-photo" class="swal2-input" value="${photoURL}" placeholder="Enter Photo URL">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: () => {
        return {
          name: document.getElementById('swal-input-name').value,
          photoURL: document.getElementById('swal-input-photo').value,
        };
      }
    });

    if (formValues) {
      // 🔹 Updating profile in Firebase
      updateProfiledata({
        displayName: formValues.name,
        photoURL: formValues.photoURL,
      }).then(() => {
        setUser({
          ...user,
          displayName: formValues.name,
          photoURL: formValues.photoURL,
        });

        Swal.fire("Updated!", "Your profile has been updated.", "success");
      }).catch(error => {
        Swal.fire("Error!", error.message, "error");
      });
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="text-center">
        {user && user.email ? (
          <div className="flex flex-col items-center gap-4">
            <img src={user.photoURL} alt="Profile" className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-md" />
            <h1 className="text-lg font-semibold">Name: {user.displayName}</h1>
            <h1 className="text-lg">Email: {user.email}</h1>
          </div>
        ) : (
          <CgProfile size={50} />
        )}
      </div>
      
      <button className="btn btn-accent mt-4" onClick={handleUpdateProfile}>
        Update Profile
      </button>
    </div>
  );
}
