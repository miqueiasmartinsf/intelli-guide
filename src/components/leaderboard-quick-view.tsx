import Link from "next/link";
import Image from "next/image";

export function LeaderboardQuickView() {
    return (
        <div className="mt-8">
            <Link href={"/dashboard/leaderboard"}>
                <h1 className="font-bold">LeaderBoard</h1>
            </Link>
            <Link href={"/dashboard/leaderboard"}>
                <div className="mt-4 flex flex-col gap-4 rounded-md border-2 p-4">
                    <div className="flex items-center justify-between">
                        <Image
                            src={"/leaderboard.svg"}
                            width={30}
                            height={30}
                            alt="leaderboard"
                        />
                        <h2 className="">Wallace</h2>
                        <span className="">500pts</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <Image
                            src={"/leaderboard.svg"}
                            width={30}
                            height={30}
                            alt="leaderboard"
                        />
                        <h2 className="">Daniel</h2>
                        <span className="">350pts</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <Image
                            src={"/leaderboard.svg"}
                            width={30}
                            height={30}
                            alt="leaderboard"
                        />
                        <h2 className="">Paulo</h2>
                        <span className="">200pts</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
