import Image from 'next/image';
import { career } from '@/assets';
import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

export default function CareerForm() {
  return (
    <div className="w-full mx-auto mt-12 lg:px-24 md:px-20 sm:p-12 pb-7">
      <div>

        {/* Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 md:gap-16 text-left items-center">

          {/* Image Side */}
          <div className="flex justify-center">
            <Image
              src={career}
              alt="Career"
              width={650}
              height={650}
              className="w-full max-w-md"
            />
          </div>

          {/* Form Side */}
          <form
            action="https://yourdomain.com/career.php"
            method="POST"
            encType="multipart/form-data"
            className="space-y-6 bg-gradient-to-br p-8 text-zinc-700 from-zinc-100 to-zinc-200 rounded-3xl shadow-xl shadow-black/40"
          >
            {/* Inputs Row */}
            
              
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold sm:text-base text-zinc-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold sm:text-base text-zinc-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold sm:text-base text-zinc-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-sm font-semibold sm:text-base text-zinc-700 mb-2">
                  Upload CV *
                </label>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  required
                  className="block w-full text-sm text-zinc-600
                             file:mr-3 file:py-3 file:px-4
                             file:rounded-xl file:border-0
                             file:bg-green-600 file:text-white
                             hover:file:bg-green-700"
                />
              </div>
            

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 rounded-full px-8 py-2 sm:py-4 text-white bg-gradient-to-r from-brown2 to-blue-900 hover:scale-90 transition-all font-semibold sm:text-base text-sm"
            >
              Submit Application
              <MdArrowRightAlt className="text-3xl animate-x" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
