

import React from 'react'

const Contact = () => {
  return (
    <div>
      <div
  name="Contact"
  className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
>
  <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
  <p className="mb-6">Looking for a MERN Stack Developer? Let’s connect and discuss your project. 👇</p>

  <div className="bg-gray-100 p-6 rounded-xl shadow-md w-[350px] space-y-4 mx-auto">

    <div>
      <h3 className="font-semibold text-gray-700">Name</h3>
      <p className="text-gray-600">Er. Shamshad Ansari</p>
    </div>
    
    {/* Email */}
    <div>
      <h3 className="font-semibold text-gray-700">Email</h3>
      <a
        href="mailto:shaim7643@gmail.com"
        className="text-blue-600 hover:underline"
      >
        shaim7643@gmail.com
      </a>
    </div>

    {/* Phone */}
    <div>
      <h3 className="font-semibold text-gray-700">Phone</h3>
      <a
        href="tel:9792881173"
        className="text-blue-600 hover:underline"
      >
        9792881173
      </a>
    </div>

    {/* Location */}
    <div>
      <h3 className="font-semibold text-gray-700">Location</h3>
      <p className="text-gray-600">West Sagarpur, Delhi</p>
    </div>

   
    </div>

  </div>
</div>

  
  )
}

export default Contact
