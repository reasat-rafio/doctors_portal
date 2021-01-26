import * as loading from "./Loading.json";
import * as done from "./done.json";
import Lottie from "react-lottie";

interface LoadingProps {}

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: loading.default,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
   },
};

const defaultOptions2 = {
   loop: false,
   autoplay: true,
   animationData: done.default,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
   },
};

export const Loading: React.FC<LoadingProps> = ({}) => {
   return (
      <div className="loading">
         <Lottie options={defaultOptions} height={200} width={200} />
         <div>Loading..</div>
      </div>
   );
};
