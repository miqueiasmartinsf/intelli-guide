import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
    return (
        <div className="flex w-full items-center justify-center">
            <ExclamationTriangleIcon className="text-destructive" />
        </div>
    );
};
