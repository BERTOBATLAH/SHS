import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Table } from "flowbite-react";

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
                            <Table hoverable={true}>
                                <Table.Head>
                                    <Table.HeadCell>
                                        Product name
                                    </Table.HeadCell>
                                    <Table.HeadCell>Color</Table.HeadCell>
                                    <Table.HeadCell>Category</Table.HeadCell>
                                    <Table.HeadCell>Price</Table.HeadCell>
                                    <Table.HeadCell>
                                        <span className="sr-only">Edit</span>
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
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            {/*<table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Body</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map(({ id, title, body }) => (
                                        <tr>
                                            <td className="border px-4 py-2">
                                                {id}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {title}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {body}
                                            </td>
                                            <td className="border px-4 py-2">
                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route(
                                                        "posts.edit",
                                                        id
                                                    )}
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={destroy}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {posts.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>*/}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
