import React, { useState } from "react";
import MFB from "./Create";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";
import { Label, TextInput, Textarea, Table } from "flowbite-react";

export default function Index(props) {
    const { data, setData, post, processing, reset, errors } = useForm({
        nama: "",
        alamat: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("kebun.store"), { onSuccess: () => reset() });
    };

    const [showModal, setShowModal] = useState(false);
    const [sending, setSending] = useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <AuthenticatedLayout auth={props.auth}>
            <Head title="Chirps" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div className="flex flex-col">
                        <div className="mb-2 block">
                            <Label value="Nama" />
                        </div>
                        <TextInput
                            value={data.nama}
                            placeholder="What's on your mind?"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={(e) => setData("nama", e.target.value)}
                        />
                        <InputError message={errors.nama} className="mt-2" />

                        <div className="mb-0">
                            <Label>Alamat</Label>
                            <Textarea
                                value={data.alamat}
                                placeholder="What's on your mind?"
                                className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={(e) =>
                                    setData("alamat", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.alamat}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <PrimaryButton className="mt-4" processing={processing}>
                        Chirp
                    </PrimaryButton>
                </form>

                <div className="mt-4">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>ID</Table.HeadCell>
                            <Table.HeadCell>Nama</Table.HeadCell>
                            <Table.HeadCell>Alamat</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {props.kebun
                                ? props.kebun.map((kebun, i) => (
                                      <Table.Row
                                          key={i}
                                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                      >
                                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                              {kebun.id}
                                          </Table.Cell>
                                          <Table.Cell>{kebun.nama}</Table.Cell>
                                          <Table.Cell>
                                              {kebun.alamat}
                                          </Table.Cell>
                                          <Table.Cell>
                                              <Button onClick={openModal}>
                                                  Create
                                              </Button>
                                              <MFB
                                                  showModal={showModal}
                                                  setShowModal={setShowModal}
                                              ></MFB>
                                          </Table.Cell>
                                          <Table.Cell>
                                              <a
                                                  href="/tables"
                                                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                              >
                                                  Delete
                                              </a>
                                          </Table.Cell>
                                      </Table.Row>
                                  ))
                                : "Tidak ada data"}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

//import React from "react";
//import Authenticated from "@/Layouts/AuthenticatedLayout";
//import InputError from "@/Components/InputError";
//import { Head, useForm, Link } from "@inertiajs/inertia-react";
//import { Label, Textarea, TextInput } from "flowbite-react";
//export default function Dashboard(props) {
//    const { data, setData, post, processing, reset, errors } = useForm({
//        message: "",
//    });
//    function handleSubmit(e) {
//        e.preventDefault();
//        post(route("posts.store"), { onSuccess: () => reset() });
//    }
//
//    return (
//        <Authenticated
//            auth={props.auth}
//            errors={props.errors}
//            header={
//                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
//                    Create Post
//                </h2>
//            }
//        >
//            <Head title="Posts" />
//            <div className="py-12">
//                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                        <div className="p-6 bg-white border-b border-gray-200">
//                            {/*<div className="flex items-center justify-between mb-6">
//                            </div>*/}
//                            <form
//                                className="flex flex-col gap-4"
//                                onSubmit={handleSubmit}
//                            >
//                                <div className="flex flex-col">
//                                    <div className="mb-2 block">
//                                        <Label value="Nama" />
//                                    </div>
//                                    <TextInput
//                                        value={data.nama}
//                                        onChange={(e) =>
//                                            setData("nama", e.target.value)
//                                        }
//                                    />
//                                    <InputError
//                                        message={errors.nama}
//                                        className="mt-2"
//                                    />
//
//                                    <div className="mb-0">
//                                        <Label>Alamat</Label>
//                                        <Textarea
//                                            className="w-full rounded"
//                                            value={data.alamat}
//                                            onChange={(e) =>
//                                                setData(
//                                                    "alamat",
//                                                    e.target.value
//                                                )
//                                            }
//                                        />
//                                        <InputError
//                                            message={errors.alamat}
//                                            className="mt-2"
//                                        />
//                                    </div>
//                                </div>
//                                <div className="mt-4">
//                                    <button
//                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
//                                        processing={processing}
//                                    >
//                                        Save
//                                    </button>
//                                </div>
//                            </form>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </Authenticated>
//    );
//}

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
