import Icon from '@material-tailwind/react/Icon'
function Login() {
    return (
        <div className="flex justify-center flex-col items-center min-h-screen">
            <Icon name="description" size="9xl" color="blue"></Icon>
            <h2 className="text-3xl text-gray-600"><strong>Google</strong> Docs</h2>
            <button>Login</button>
        </div>
    )
}

export default Login;
