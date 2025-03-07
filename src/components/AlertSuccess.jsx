import Swal from "sweetalert2";

export default function AlertSuccess({text}) {
  const showAlert = () => {
    Swal.fire({
      title: "Success!",
      text: text,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <button onClick={showAlert} className="p-2 bg-blue-500 text-white rounded">
      Show Alert
    </button>
  );
}