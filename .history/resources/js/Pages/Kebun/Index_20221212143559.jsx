import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";

export default function Kebun(props) {
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [showModal, setShowModal] = useState(false);

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
                                <React.Fragment>
                                    <Button onClick={() => setShowModal(true)}>
                                        Toggle modal
                                    </Button>
                                    <Modal
                                        show={showModal}
                                        size="md"
                                        popup={true}
                                        onClose={() => setShowModal(false)}
                                    >
                                        <Modal.Header />
                                        <Modal.Body>
                                            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                                    Input Data Kebun
                                                </h3>
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label
                                                            htmlFor="nama"
                                                            value="Nama"
                                                        />
                                                    </div>
                                                    <TextInput
                                                        id="nama"
                                                        required={true}
                                                    />
                                                </div>
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label
                                                            htmlFor="alamat"
                                                            value="Alamat Anda"
                                                        />
                                                    </div>
                                                    <TextInput
                                                        id="alamat"
                                                        required={true}
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <Button>
                                                        Log in to your account
                                                    </Button>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
