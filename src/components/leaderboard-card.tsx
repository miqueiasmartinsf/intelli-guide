import { User } from "lucide-react";
import Image from "next/image";
import ImgLeaderboard from "@/public/leaderboard.svg";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

type LeaderboardCardProps = {
    position: number;
    name: string;
    points: number;
    profileImg: string;
};

export function LeaderBoardCard({
    name,
    points,
    position,
    profileImg,
}: LeaderboardCardProps) {
    return (
        <div className="hover: flex items-center gap-10 rounded-md border-b-2 px-6 py-4 hover:bg-black/5">
            <div>
                {position < 4 ? (
                    <Image
                        src={ImgLeaderboard}
                        alt="Ranking"
                        width={32}
                        height={32}
                    />
                ) : (
                    <span className="text-xl font-bold">{position}</span>
                )}
            </div>

            <div className="w-20 rounded-full border-2 p-2">
                {profileImg ? (
                    <Avatar className="">
                        <AvatarImage
                            className="rounded-full object-cover"
                            src={profileImg}
                        />
                    </Avatar>
                ) : (
                    <User color="#c9c9c9" size={30} />
                )}
            </div>

            <div>
                <h1 className="text-xl">{name}</h1>
            </div>

            <div>{points} pts</div>
        </div>
    );
}
