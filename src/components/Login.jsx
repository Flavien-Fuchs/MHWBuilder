/* eslint-disable react/prop-types */
import '../css/Login.css'



function Login({ handleApi, isLoading, armors, weapons, charms, skills }) {


    return (
        <div className='login'>
            <img src="./src/images/logo.png" alt="logo" />
            {isLoading ? (<div className='loginContainer'>
                <p>Armor : {!armors ? <span style={{ color: "red" }}>Loading...</span> : <span style={{ color: "green" }}>Done!</span>}</p>
                <p>Weapons : {!weapons ? <span style={{ color: "red" }}>Loading...</span> : <span style={{ color: "green" }}>Done!</span>}</p>
                <p>Charms : {!charms ? <span style={{ color: "red" }}>Loading...</span> : <span style={{ color: "green" }}>Done!</span>}</p>
                <p>Skills : {!skills ? <span style={{ color: "red" }}>Loading...</span> : <span style={{ color: "green" }}>Done!</span>}</p>
                <img src="./src/images/loading.gif" alt="loading" />
            </div>) : (<button onClick={handleApi}>Play</button>)}
        </div>)
}

export default Login