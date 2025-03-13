import { Children } from "react";

export default function NoteCard(props){
    let isPinned = props.isPinned;
    let title = props.title;
    let children = props.children;

    let pinIcon = <i class="fi fi-rr-thumbtack" />;

    return (
        <div id="note_container" className="bg-white w-[225px] min-h-[120px] p-5 mb-5 border-gray-300 border-2 rounded-md">
            <div id="note-title" className="mb-2 font-bold">
                {title} {isPinned ? pinIcon : ""}
            </div>
            <div id="note-content" className="text-md">
                {children}
            </div>
        </div>
    )
} 