import React from "react";

export default function Table({ kebun }) {
    return (
        <Table>
            <Table.Head>
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>Nama</Table.HeadCell>
                <Table.HeadCell>Alamat</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
                    <Table.Cell>{kebun.user.name}</Table.Cell>
                    <Table.Cell>{kebun.alamat}</Table.Cell>
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
    );
}
