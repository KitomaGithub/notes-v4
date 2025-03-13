export default function NavButton({title, icon, event}){
    return(
        <button onClick={event} id="notes" className="flex flex-row px-3 lg:px-6 items-center gap-6 w-full cursor-pointer h-15 hover:bg-gray-300">
            <div className="basis-16">
                <i className={`fi ${icon} text-2xl lg:text-3xl`}/>
            </div>
            <div id="name" className="lg:text-xl hidden lg:block">
                {title}
            </div>
        </button>
    )
}