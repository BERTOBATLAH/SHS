import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import MFB from "@/Components/MFB";
import { Button, Table } from "flowbite-react";

export default function Kebun(props) {
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
    };

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
                            <div className="flex items-center justify-between mb-6">
                                <Button onClick={openModal}>
                                    Toggle modal
                                </Button>
                                <MFB
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                ></MFB>
                                <Table>
                                    <Table.Head>
                                        <Table.HeadCell>
                                            Product name
                                        </Table.HeadCell>
                                        <Table.HeadCell>Color</Table.HeadCell>
                                        <Table.HeadCell>
                                            Category
                                        </Table.HeadCell>
                                        <Table.HeadCell>Price</Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Apple MacBook Pro 17"
                                            </Table.Cell>
                                            <Table.Cell>Sliver</Table.Cell>
                                            <Table.Cell>Laptop</Table.Cell>
                                            <Table.Cell>$2999</Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Microsoft Surface Pro
                                            </Table.Cell>
                                            <Table.Cell>White</Table.Cell>
                                            <Table.Cell>Laptop PC</Table.Cell>
                                            <Table.Cell>$1999</Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Magic Mouse 2
                                            </Table.Cell>
                                            <Table.Cell>Black</Table.Cell>
                                            <Table.Cell>Accessories</Table.Cell>
                                            <Table.Cell>$99</Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
