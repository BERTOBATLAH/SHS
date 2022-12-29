import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/inertia-react";
import { Table } from "flowbite-react";
export default function Dashboard(props) {
    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
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
                            {/*<div className="flex items-center justify-between mb-6">
                            </div>*/}
                            <form
                                className="flex flex-col gap-4"
                                onSubmit={handleSubmit}
                            >
                                <div className="flex flex-col">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="email1"
                                            value="Your email"
                                        />
                                    </div>
                                    {/*<div className="mb-4">
                                        <label className="">Nama</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Title"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>*/}
                                    <div className="mb-0">
                                        <label className="">Alamat</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="body"
                                            name="body"
                                            errors={errors.body}
                                            value={data.body}
                                            onChange={(e) =>
                                                setData("body", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.body}
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

//create with modal

//import React, { useState } from "react";
//import Authenticated from "@/Layouts/AuthenticatedLayout";
//import { Link, Head } from "@inertiajs/inertia-react";
//import MFB from "./Create";
//import { Button, Table } from "flowbite-react";
//
//export default function Kebun(props) {
//    const [showModal, setShowModal] = useState(false);
//    const [sending, setSending] = useState(false);
//    const openModal = () => {
//        setShowModal((prev) => !prev);
//    };
//
//    return (
//        <Authenticated
//            auth={props.auth}
//            errors={props.errors}
//            header={
//                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
//                    Kebun
//                </h2>
//            }
//        >
//            <Head title="Kebun" />
//            <div className="py-12">
//                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                        <div className="p-6 bg-white border-b border-gray-200">
//                            <div className="flex items-center justify-between mb-6">
//                                <Button onClick={openModal}>Create</Button>
//                                <MFB
//                                    showModal={showModal}
//                                    setShowModal={setShowModal}
//                                ></MFB>
//                            </div>
//                            <Table className="table-fixed w-full">
//                                <Table.Head>
//                                    <Table.HeadCell>ID</Table.HeadCell>
//                                    <Table.HeadCell>ID Kebun</Table.HeadCell>
//                                    <Table.HeadCell>Nama</Table.HeadCell>
//                                    <Table.HeadCell>Alamat</Table.HeadCell>
//                                    <Table.HeadCell>
//                                        Action
//                                        <span className="sr-only">Edit</span>
//                                    </Table.HeadCell>
//                                </Table.Head>
//                                <Table.Body className="divide-y">
//                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                                            Apple MacBook Pro 17"
//                                        </Table.Cell>
//                                        <Table.Cell>Sliver</Table.Cell>
//                                        <Table.Cell>Laptop</Table.Cell>
//                                        <Table.Cell>$2999</Table.Cell>
//                                        <Table.Cell>
//                                            <a
//                                                href="/tables"
//                                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//                                            >
//                                                Edit
//                                            </a>
//                                        </Table.Cell>
//                                    </Table.Row>
//                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                                            Microsoft Surface Pro
//                                        </Table.Cell>
//                                        <Table.Cell>White</Table.Cell>
//                                        <Table.Cell>Laptop PC</Table.Cell>
//                                        <Table.Cell>$1999</Table.Cell>
//                                        <Table.Cell>
//                                            <a
//                                                href="/tables"
//                                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//                                            >
//                                                Edit
//                                            </a>
//                                        </Table.Cell>
//                                    </Table.Row>
//                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                                            Magic Mouse 2
//                                        </Table.Cell>
//                                        <Table.Cell>Black</Table.Cell>
//                                        <Table.Cell>Accessories</Table.Cell>
//                                        <Table.Cell>$99</Table.Cell>
//                                        <Table.Cell>
//                                            <a
//                                                href="/tables"
//                                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//                                            >
//                                                Edit
//                                            </a>
//                                        </Table.Cell>
//                                    </Table.Row>
//                                </Table.Body>
//                            </Table>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </Authenticated>
//    );
//}
