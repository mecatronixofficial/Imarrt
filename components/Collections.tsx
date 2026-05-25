"use client";

import ImgHelper from "@/helper/img_helper";
import Image from "next/image";

export default function Collections() {
  return (
    <section
      className="
        min-h-screen grid grid-cols-2 bg-[#F8E22A]
        max-[900px]:grid-cols-1
      "
    >
      {/* Left Side Image */}
      <div
        className="
          relative min-h-screen overflow-hidden
          max-[900px]:min-h-[400px]
        "
      >
        <Image
          src={ImgHelper.Collections.Size}
          alt="T Shirt"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Side Size Chart */}
      <div
        className="
          flex flex-col justify-center p-20 bg-[#F8E22A]
          max-[900px]:px-6 max-[900px]:py-[50px]
        "
      >
        <span
          className="
            inline-block w-fit bg-white text-[#111111]
            px-[18px] py-2 rounded-[40px]
            text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-5
          "
        >
          Premium Collection
        </span>

        <h1
          className="
            font-bold text-[#111111] mb-4
            text-[clamp(2.5rem,4vw,4rem)]
            max-[900px]:text-[2.4rem]
          "
        >
          {" "}
          Size Chart
        </h1>

        <p className="text-base leading-[1.8] text-[#666] mb-10">
          Find your perfect fit with our premium measurement guide.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-2xl overflow-hidden">
            <thead className="bg-[#111]">
              <tr>
                <th className="text-[#f8e22a] p-[18px] text-left text-[0.9rem] tracking-[0.08em] uppercase">
                  Size
                </th>
                <th className="text-[#f8e22a] p-[18px] text-left text-[0.9rem] tracking-[0.08em] uppercase">
                  Chest
                </th>
                <th className="text-[#f8e22a] p-[18px] text-left text-[0.9rem] tracking-[0.08em] uppercase">
                  Length
                </th>
                <th className="text-[#f8e22a] p-[18px] text-left text-[0.9rem] tracking-[0.08em] uppercase">
                  Shoulder
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                ["S", '38"', '27"', '16"'],
                ["M", '40"', '28"', '17"'],
                ["L", '42"', '29"', '18"'],
                ["XL", '44"', '30"', '19"'],
                ["XXL", '46"', '31"', '20"'],
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[#eaeaea] transition-colors duration-300 hover:bg-[#fff8d6]"
                >
                  {row.map((c, j) => (
                    <td
                      key={j}
                      className="p-[18px] text-base font-medium text-[#222]"
                    >
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
