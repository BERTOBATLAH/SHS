import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import MFB from "@/Components/MFB";
import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";

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
                                <React.Fragment>
                                    <Button onClick={openModal}>
                                        Toggle modal
                                    </Button>
                                    <MFB
                                        showModal={showModal}
                                        setShowModal={setShowModal}
                                    ></MFB>
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
