import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import { Label, TextInput, Textarea } from "flowbite-react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        nama: "",
        alamat: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("kebun.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Chirps" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="nama" />
                    </div>
                    <TextInput
                        type="text"
                        className="w-full px-4 py-2"
                        label="Title"
                        name="title"
                        value={data.nama}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your message" />
                        </div>
                        <Textarea
                            id="comment"
                            placeholder="Leave a comment..."
                            required={true}
                            rows={4}
                        />
                    </div>
                    <PrimaryButton className="mt-4" processing={processing}>
                        Chirp
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
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
