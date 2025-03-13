import { Outlet } from "react-router";
import NavButton from "../../components/nav_button";
import Logo from "../../assets/image/logo.png";

export default function NotesLayout(){
    return (
        <div className="w-dvw h-dvh flex flex-row bg-[url(assets/image/textured-bg.jpg)] bg-contain bg-fixed overflow-x-hidden">
            <div id="sidebar" className="basis-16 lg:basis-2/10 flex flex-col col-span-2 bg-netotakugreen-100/65 sticky top-0">
                <div id="logo" className="px-3 py-5 lg:px-12">
                    <img src={Logo}/>
                </div>
                <div class="navbar" className="flex flex-col justify-center lg:gap-2">
                    <NavButton 
                        icon={"fi-rs-note-sticky"} 
                        title={"Notes"}
                        event={() => alert("Notes")}
                    />
                     <NavButton 
                        icon={"fi-rr-folder"} 
                        title={"Folders"}
                        event={() => alert("Folders")}
                    />
                    <NavButton 
                       icon={"fi-rs-box"} 
                       title={"Archive"}
                       event={() => alert("Folders")}
                   />
                   <NavButton 
                      icon={"fi-rs-trash"} 
                      title={"Trash"}
                      event={() => alert("Folders")}
                  />
                </div>
            </div>
            <div id="content" className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}