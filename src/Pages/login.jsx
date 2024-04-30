import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <AuthLayout title="login">
      <FormLogin></FormLogin>
      <p className="text-sm mt-5 text-center">
        Tidak punya akun ? silahkan {" "}
         <Link to="/register" className="font-bold text-blue-600">
           Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
