"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { banner, banner2 } from "@/assets";

export default function ProductGallery({ detail }: any) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const magnifierSize = 200;
  const zoomLevel = 3;

  const handleMouseEnter = () => setShowMagnifier(true);
  const handleMouseLeave = () => setShowMagnifier(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      setMousePosition({
        x: Math.max(0, Math.min(x, width)),
        y: Math.max(0, Math.min(y, height)),
      });
    }
  };

  return (
    <div className="pb-4 ">
      <div className="mb-6 md:mb-8">
        <div
          className="relative mx-auto h-80 w-full max-w-[450px]  sm:h-[450px]"
          ref={imageRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <Image
            src={detail?.img}
            alt={"Product Image"}
            fill
            className="object-cover max-h-[450px] w-full h-full"
            priority
          />

          {/* Magnifier lens */}
          {showMagnifier && (
  <div
    className="absolute rounded-full overflow-hidden pointer-events-none border-2 border-gray-200 shadow-lg z-50"
    style={{
      width: `${magnifierSize}px`,
      height: `${magnifierSize}px`,
      left: `${mousePosition.x - magnifierSize / 2}px`,
      top: `${mousePosition.y - magnifierSize / 2}px`,
    }}
  >
    <div className="backdrop-blur-sm"
      style={{
        position: "absolute",
        width: `${imageRef.current?.clientWidth || 0}px`,
        height: `${imageRef.current?.clientHeight || 0}px`,
        transform: `scale(${zoomLevel})`,
        transformOrigin: "top left",
        left: `${-mousePosition.x * zoomLevel + magnifierSize / 2}px`,
        top: `${-mousePosition.y * zoomLevel + magnifierSize / 2}px`,
      }}
    >
      <Image
        src={detail.img}
        alt="Magnified view"
        fill
        className="object-cover"
      />
    </div>
  </div>
)}
        </div>
      </div>

      <div className="space-y-4 w-full">
        {detail?.name && (
          <h2 className="text-brown2 text-3xl md:text-4xl font-bold">{detail.name}</h2>
        )}
        {detail?.desc && (
          <p className="text-base text-black !mt-1">{detail.desc}</p>
        )}
        {detail?.category && (
          <p className="py-1 font-bold text-sm w-max px-5 bg-yellow3 rounded-md shadow-lg">
            {detail.category}
          </p>
        )}
        {detail?.para1 && (
          <p className="text-zinc-600 text-sm md:text-base">{detail.para1}</p>
        )}
        {detail?.para2 && (
          <p className="text-zinc-600 text-sm md:text-base">{detail.para2}</p>
        )}
        {detail?.para3 && (
          <p className="text-zinc-600 text-sm md:text-base">{detail.para3}</p>
        )}

        {detail?.sizes && (
          <table className="w-full border-collapse border !mt-6 border-gray-300">
            <thead>
              <tr className="bg-green2 text-white">
                <th className="border px-4 py-2">Pack</th>
                <th className="border px-4 py-2">Cartoon</th>
              </tr>
            </thead>
            <tbody>
              {detail?.sizes?.map((boxes: any) => (
                <tr key={boxes?.id} className="hover:bg-gray-50 text-zinc-800 text-center">
                  <td className="border border-gray-300 px-4 py-2">{boxes?.pack}</td>
                  <td className="border border-gray-300 px-4 py-2">{boxes?.cartoon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
