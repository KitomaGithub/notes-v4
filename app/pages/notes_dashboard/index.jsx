import Masonry from "react-masonry-css";
import NoteCard from "../../components/note_card";

export default function NotesDashboard(){

    const breakpoints = {
        1280: 5,
        1024: 4,
        768: 3,
        640: 1,
        320: 1,
        default: 5,
    };

    return(
        <div className="px-5 lg:px-8 min-h-full bg-gray-200/50">

            <div id="heading" className="text-3xl pt-10 border-b-2 border-gray-400 mb-5">
                Pinned <i class="fi fi-rr-thumbtack" />
            </div>
            <Masonry
                breakpointCols={breakpoints}
                className="flex md:px-10"
                columnClassName="px-1 md:px-3"
            >
                <NoteCard title="test">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eum sapiente fugit! Assumenda blanditiis sit veritatis facere quidem, temporibus quis repellat atque magnam debitis quod labore fugiat fuga et quaerat!
                </NoteCard>
                <NoteCard>
                    asoginasopgn
                </NoteCard>
                <NoteCard>
                    asoginasopgn
                </NoteCard>
                <NoteCard>
                    asoginasopgn
                </NoteCard>
                <NoteCard>
                    asoginasopgn
                </NoteCard>
                <NoteCard>
                    asoginasopgn
                </NoteCard>
            </Masonry>
        </div>
    )
}