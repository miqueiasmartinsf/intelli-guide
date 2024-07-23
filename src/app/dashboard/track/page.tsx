import { LearnTrack } from "@/components/learn-track";
import { Header } from "@/app/(main)/learn/header";

function TrackPage() {
    return (
        <div className="min-h-screen w-full px-3">
            <h1 className="text-2xl font-bold text-neutral-700">Lean Track</h1>

            <Header title="Futebol" />

            <div>
                <LearnTrack />
            </div>
        </div>
    );
}

export default TrackPage;
