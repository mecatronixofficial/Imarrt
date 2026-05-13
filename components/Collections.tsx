"use client";

import ImgHelper from "@/helper/img_helper";
import Image from "next/image";

export default function Collections() {
  return (
    <section className="size-page">
      {/* Left Side Image */}
      <div className="size-image-wrap">
        <Image
          src={ImgHelper.Collections.Size}
          alt="T Shirt"
          fill
          className="size-image"
        />
      </div>

      {/* Right Side Size Chart */}
      <div className="size-content">
        <span className="size-tag">Premium Collection</span>

        <h1 className="size-title"> Size Chart</h1>

        <p className="size-desc">
          Find your perfect fit with our premium  measurement guide.
        </p>

        <div className="size-table-wrap">
          <table className="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Length</th>
                <th>Shoulder</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>S</td>
                <td>38"</td>
                <td>27"</td>
                <td>16"</td>
              </tr>

              <tr>
                <td>M</td>
                <td>40"</td>
                <td>28"</td>
                <td>17"</td>
              </tr>

              <tr>
                <td>L</td>
                <td>42"</td>
                <td>29"</td>
                <td>18"</td>
              </tr>

              <tr>
                <td>XL</td>
                <td>44"</td>
                <td>30"</td>
                <td>19"</td>
              </tr>

              <tr>
                <td>XXL</td>
                <td>46"</td>
                <td>31"</td>
                <td>20"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}