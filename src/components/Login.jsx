/* eslint-disable react/prop-types */
import '../css/Login.css'


function Login({ Api }) {
    Api()
    return (<div className='login'>
        <img src="./src/images/logo.png" alt="logo" />
        <img src="./src/images/loading.gif" alt="loading" />
    </div>)
}

export default Login