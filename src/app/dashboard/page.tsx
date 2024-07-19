function DashboardPage() {
    return (
        <div className="mx-auto h-full max-w-[912px] px-3">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="mt-14 flex gap-5">
                <div className="flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col justify-between rounded-xl border-2 border-b-4 p-4 pb-6 hover:bg-black/5 active:border-b-2">
                    <h3 className="text-xl font-bold">Sua pontuação</h3>
                    <p className="mt-3 text-base">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>

                    <div>
                        <h2 className="mt-3 text-2xl">1420.3</h2>
                    </div>
                </div>
                <div className="flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-4 p-3 pb-6 hover:bg-black/5 active:border-b-2">
                    <h3 className="text-xl font-bold">Sua pontuação</h3>
                    <p className="mt-3 text-base">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>

                    <div>
                        <h2 className="mt-3 text-2xl">1420.3</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
