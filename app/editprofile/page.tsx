'use client'

import Image from "next/image"
import { useState } from "react"

export default function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [profilePic, setProfilePic] = useState("/default-profile.jpg")

  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [bio, setBio] = useState(``)
  const [website, setWebsite] = useState("https://linktr.ee/alexmorgan")

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]))
    }
  }

  function saveProfile() {
    setShowModal(false)
  }

  return (
    <div className="p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center border-b pb-3">
        <h1 className="text-xl font-bold">Instagram</h1>
        <div className="flex gap-4 items-center">
          <Image src={profilePic} alt="profile" width={40} height={40} className="rounded-full" />
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="border px-3 py-1 rounded"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      {/* PROFILE HEADER */}
      <div className="flex gap-8 mt-10 items-center">
        <Image src={profilePic} alt="profile" width={120} height={120} className="rounded-full" />

        <div>
          <h2 className="text-2xl">{username}</h2>

          {isLoggedIn && (
            <button
              onClick={() => setShowModal(true)}
              className="border px-4 py-1 mt-2 rounded"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* BIO */}
      <div className="mt-4 border-b pb-4">
        <p className="font-semibold">{name}</p>
        <p className="whitespace-pre-line">{bio}</p>
        <a href={website} className="text-blue-500 ">{website}</a>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-black p-6 rounded w-[400px]">
            <h2 className="text-lg mb-4">Edit Profile</h2>

            <Image src={profilePic} alt="preview" width={100} height={100} className="rounded-full mx-auto" />

            <input type="file" onChange={handleImageChange} className="mt-3" />

            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
              className="border p-2 w-full mt-2"
            />

            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              className="border p-2 w-full mt-2"
            />

            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              className="border p-2 w-full mt-2"
            />

            <input
              value={website}
              onChange={e => setWebsite(e.target.value)}
              placeholder="Website"
              className="border p-2 w-full mt-2"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={saveProfile} className="bg-blue-500 text-white px-3 py-1 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
