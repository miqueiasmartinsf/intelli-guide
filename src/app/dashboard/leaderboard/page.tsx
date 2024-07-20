import { LeaderBoardCard } from "@/components/leaderboard-card";

const LEADER_BOARD_MOCK = [
    { name: "Wallace Medeiros", points: 500 },
    { name: "Daniel Prado", points: 350 },
    { name: "Vitor Albuquerque", points: 250 },
    { name: "Gabriel Andrade", points: 50 },
    { name: "Sofia Silva", points: 20 },
];

function LeaderboardPage() {
    return (
        <div className="h-full w-full px-3">
            <h1 className="text-2xl font-bold text-neutral-700">Leaderboard</h1>

            <div className="mt-8 flex flex-col justify-center gap-2">
                {LEADER_BOARD_MOCK.map((user, index) => {
                    return (
                        <LeaderBoardCard
                            name={user.name}
                            points={user.points}
                            position={index + 1}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default LeaderboardPage;
