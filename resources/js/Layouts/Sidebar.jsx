import {
    HiChartPie,
    HiViewBoards,
    HiInbox,
    HiUser,
    HiShoppingBag,
    HiArrowSmRight,
    HiTable,
} from "react-icons/hi";
import { Sidebar } from "flowbite-react";

export default function Side({ auth }) {
    return (
        <div className="w-fit">
            <Sidebar aria-label="Sidebar with logo branding example">
                <Sidebar.Logo href="#">Flowbite</Sidebar.Logo>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href={route("dashboard")}
                            icon={HiChartPie}
                        >
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiViewBoards}>
                            Kanban
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiInbox}>
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser}>
                            {auth.user.name}
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiTable}>
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
}
