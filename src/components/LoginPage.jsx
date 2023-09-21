import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div>
      <div className="text-center ">
        <div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
          <p className="mb-8 text-4xl font-black">Welcome!</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
