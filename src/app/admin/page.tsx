import { UserRole } from "@prisma/client";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { auth } from "@/services/auth";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = async () => {
    const session = await auth();
    const user = session?.user;

    const isAdmin = user?.role === UserRole.ADMIN;

    if (!isAdmin) {
        redirect("/");
    }

    return <App />;
};

export default AdminPage;
