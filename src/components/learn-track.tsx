import { Button } from "./ui/button";
import { LearnTrackCard } from "./learn-track-card";

const data = [
    {
        title: "Futebol #1",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    },
    {
        title: "Futebol #2",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        title: "Futebol #3",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
];

export function LearnTrack() {
    return (
        <div className="flex flex-col p-12">
            {data.map((item, index) => {
                return (
                    <LearnTrackCard
                        index={index}
                        content={item.content}
                        title={item.title}
                    />
                );
            })}
        </div>
    );
}
