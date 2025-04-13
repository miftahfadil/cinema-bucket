import { use, useState } from "react";
import testPost from "../services/servicePost";
import { useEffect } from "react";

const LoginPage = () => {
    const [data, setData] = useState([]);

    const test = async () => {
        const response = await testPost();
        setData(response); 
        console.log(response);
    }

    useEffect(() => {
        test();
      }, []);      

    return (
        <div>
            <div className="content relative min-h-screen h-fit min-w-screen w-full flex justify-center items-center">
                <div className="form-container">
                    <h1 className="text-blue-500">Login Page</h1>
                    <form action="">
                        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            
                            <button className="btn btn-primary mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;