import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Button } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Table } from "flowbite-react";

export default function Kebun(props) {
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kebun
                </h2>
            }
        >
            <Head title="Kebun" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {/*<div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("posts.create")}
                                >
                                    Create Post
                                </Link>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
