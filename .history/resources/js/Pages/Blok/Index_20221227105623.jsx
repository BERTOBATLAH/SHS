import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Button, Table } from "flowbite-react";

export default function Dashboard(props) {
    const { posts } = usePage().props;
    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("posts.destroy", e.currentTarget.id));
        }
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Posts
                </h2>
            }
        >
            <Head title="Posts" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("posts.create")}
                                >
                                    Create Post
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
