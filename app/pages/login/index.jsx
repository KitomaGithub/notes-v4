import classNames from "classnames";
import logo from "../../assets/image/logo.png"
import { Link } from "react-router"
import { useState } from "react";

export default function LoginPage(){
    const [isAnimate, setIsAnimate] = useState(false);

    const btn_class = classNames(
        "w-full py-2 mt-4 border-2 rounded-md uppercase transition-all duration-300 transform",
        "hover:shadow-md hover:shadow-gray-200 hover:bg-gray-200 hover:scale-105",
        {   
            "motion-safe:animate-bounce": isAnimate
        }
    );

    function animate_button(){
        setIsAnimate(true)
        setTimeout(() => {
            setIsAnimate(false)
        }, 500)
    }

    return(
        <div className="bg-[url(assets/image/textured-bg.jpg)] bg-contain bg-fixed bg- w-dvw h-dvh">
            <div className="bg-gradient-to-b from-0% to-93% to-netotakugreen-500/50 from-transparent w-full h-full flex justify-center items-center">
                <div className="border-2 border-gray-500 bg-white pb-10 px-15 rounded-lg h-fit gap-4 flex flex-col items-center shadow-md shadow-netotakupurple-500">
                    <img src={logo} className="max-w-64"/>
                    <div className="flex flex-col w-full">
                        <p className="uppercase">Username</p>
                        <input className="border-2 w-full p-1 px-2" />
                    </div>
                    <div className="flex flex-col w-full">
                        <p className="uppercase">Password</p>
                        <input className="border-2 w-full p-1 px-2" type="password"/>
                    </div>
                    <Link to="#" className="w-[70%]">
                        <button className={btn_class}
                            onClick={animate_button}
                        >
                            log in
                        </button>
                    </Link>
                    <Link to="/">
                        <p className="uppercase text-sm mt-4 underline text-netotakupurple-500">
                            sign up
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}