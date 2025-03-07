import React, { useState } from "react";
import Swal from "sweetalert2";

const index = () => {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileName, fileContent }),
    });

    console.log("res =>", res.status);

    const data = await res.json();
    console.log(data.message);

    if (res.status === 200) {
      const showAlert = () => {
        Swal.fire({
          title: "Success!",
          text: data.message,
          icon: "success",
          confirmButtonText: "OK",
        });
      };
      showAlert();
    } else {
      const showAlert = () => {
        Swal.fire({
          title: "Error!",
          text: data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      };
      showAlert();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen" dir="rtl">
      <form onSubmit={handleSubmit} className="bg-amber-200 p-5 w-1/3">
        <input
          type="text"
          placeholder="نام فایل (مثلاً test.txt)"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="w-full bg-white my-2.5 py-2 px-3 rounded-full"
        />
        <textarea
          placeholder="محتوای فایل"
          value={fileContent}
          onChange={(e) => setFileContent(e.target.value)}
          className="w-full bg-white my-2.5 py-2 px-3 rounded-full"
        />
        <button
          type="submit"
          className="cursor-pointer bg-amber-600 rounded-full text-white py-2 px-3 w-full"
        >
          ذخیره فایل
        </button>
      </form>
    </div>
  );
};

export default index;
