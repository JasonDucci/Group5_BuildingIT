import { PuffLoader } from "react-spinners";

function Loader() {
  return (
    <div className="w-full py-4 px-2 flex-colo">
      <PuffLoader color="#f26100" />
    </div>
  );
}

export default Loader;
