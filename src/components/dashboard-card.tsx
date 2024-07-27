type CardProps = {
    title: string;
    subtitle: string;
    content: string | number;
};

export function DashBoardCard({ content, subtitle, title }: CardProps) {
    return (
        <div className="flex h-full min-h-[200px] min-w-[250px] max-w-[300px] cursor-pointer flex-col gap-4 rounded-xl border-2 border-b-4 p-4 pb-6 hover:bg-black/5 active:border-b-2">
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-base">{subtitle}</p>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-primary">{content}</h2>
            </div>
        </div>
    );
}
