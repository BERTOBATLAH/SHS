import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/inertia-react";
import { Label } from "flowbite-react";

export default function Dashboard(props) {
    const { data, setData, errors, post } = useForm({
        nama_kebun: "",
        label: "Apple",
        value: 1,
        label: "Mangga",
        value: 2,
        label: "Orange",
        value: 3,
        label: "Orange",
        value: 4,
        label: "Orange",
        value: 5,
        nama: "",
        alamat: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        post(route("posts.store"));
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Post
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
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={route("posts.index")}
                                >
                                    Back
                                </Link>
                            </div>
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        {/*<label className="">Nama Kebun</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Title"
                                            name="title"
                                            value={data.nama_kebun}
                                            onChange={(e) =>
                                                setData(
                                                    "nama_kebun",
                                                    e.target.value
                                                )
                                            }
                                        />*/}
                                        <div id="select">
                                            <div className="mb-2 block">
                                                <Label
                                                    htmlFor="countries"
                                                    value="Select your country"
                                                />
                                            </div>
                                            <Select
                                                id="countries"
                                                required={true}
                                            >
                                                <option>United States</option>
                                            </Select>
                                        </div>
                                        <span className="text-red-600">
                                            {errors.nama_kebun}
                                        </span>
                                    </div>
                                    {/* End dropdown */}
                                    <div className="mb-4">
                                        <label className="">Nama</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Title"
                                            name="title"
                                            value={data.nama}
                                            onChange={(e) =>
                                                setData("nama", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.nama}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Alamat</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="body"
                                            name="body"
                                            value={data.alamat}
                                            onChange={(e) =>
                                                setData(
                                                    "alamat",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.alamat}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
