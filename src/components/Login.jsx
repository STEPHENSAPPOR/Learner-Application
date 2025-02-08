import { Mail, Lock } from "lucide-react";

const Login = () => {
  return (
    <div className="flex h-screen">
      
      <div className="w-1/3 bg-blue-900 text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-2xl font-bold mb-4">C<span className="text-blue-300">Lient</span></h1>
        <p className="text-lg text-center">Create Your Account to Manage and Access the Dashboard Effortlessly.</p>
        <div className="mt-6">
          <img src="/mnt/data/login.png" alt="Illustration" className="w-60" />
        </div>
      </div>

      
      <div className="w-2/3 flex flex-col justify-center items-center">
        <div className="w-96">
          <h2 className="text-2xl font-bold mb-6">Login into your account</h2>
          
          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input type="email" placeholder="Email" className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div className="mb-2 relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input type="password" placeholder="Password" className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <a href="#" className="text-blue-500 text-sm mb-4 inline-block">Forgot password?</a>
          
          <button className="w-full bg-gray-300 text-gray-700 p-2 rounded-md mt-2 hover:bg-gray-400 transition">Login</button>
          
          <div className="text-center mt-4">
            <span className="text-sm">Need to create an account? </span>
            <a href="#" className="text-blue-500 font-medium">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;