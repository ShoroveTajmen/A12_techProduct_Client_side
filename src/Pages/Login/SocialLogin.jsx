import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (login) => {
    login()
      .then((res) => {
        console.log(res);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          toast.success("Login Successful");
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        {/* <h1 className="mr-3">Or Continue With </h1> */}
        <button
          onClick={() => handleLogin(googleLogin)}
          className="btn mt-3 capitalize text-sm font-semibold mr-3"
        >
          Or Continue With Google
          <img
            className="w-[30px] h-[30px] rounded-full"
            src="https://i.ibb.co/zhxYysk/google.webp"
            alt="google"
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
