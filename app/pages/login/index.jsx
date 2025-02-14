import Typography from "typography"
import logo from "../assets/image/logo.png"

export default function LoginPage(){
    return(
        <div class="bg-[url(pages/assets/image/textured-bg.jpg)] bg-fixed w-screen h-screen">
            <div class="bg-gradient-to-b from-0% to-93% to-netotakugreen-500/50 from-transparent w-full h-full flex justify-center items-center">
                <div class="border-2 bg-white pb-10 px-15 rounded-lg h-fit gap-4 flex flex-col items-center shadow-md shadow-slate-500">
                    <img src={logo} class="max-w-64"/>
                    <div class="flex flex-col w-full">
                        <p>Username</p>
                        <input class="border-2 w-full p-1 shadow-sm shadow-slate-500" />
                    </div>
                    <div class="flex flex-col w-full">
                        <p>Password</p>
                        <input class="border-2 w-full p-1 shadow-sm shadow-slate-500" type="password"/>
                    </div>
                    <button class="w-[70%] py-2 mt-4 border-2 shadow-sm shadow-slate-500 rounded-md">
                        LOG IN
                    </button>
                </div>
            </div>
        </div>
    )
}