import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="md:px-20 px-5" dir="rtl">
      <h1 className="text-2xl font-bold text-blue-700 mb-5">
        تمرینی بنویسید که :
      </h1>


      <ul className="mb-5">
        <li>
            1. یه فایلی بسازید با پسوند txt
        </li>
        <li>
            2. اون فایل رو درون پوشه پابلیک ذخیره کنه
        </li>
        {/* <li>2. شامل دو تا لی اوت باشه. روت های داخلی تر لی اوت شون فرق کنه</li> */}
      </ul>


      <Link
        href="/tamrin3/view3"
        className="py-2 bg-blue-600 text-white px-5 inline-block rounded"
      >
        مشاهده تمرین
      </Link>
    </div>
  );
};

export default index;
