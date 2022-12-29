import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Button, Modal } from "flowbite-react";

export default function Kebun(props) {
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const handleShow() => { showModal === false ?  setShowModal(true) : setShowModal(false)  }

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
                                    <Button onClick={() => setShowModal(!show)}>
                                        Toggle modal
                                    </Button>
                                    <Modal
                                        show={showModal}
                                        size="md"
                                        popup={true}
                                        onClose={onClose}
                                    >
                                        <Modal.Header>
                                            Terms of Service
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    With less than a month to go
                                                    before the European Union
                                                    enacts new consumer privacy
                                                    laws for its citizens,
                                                    companies around the world
                                                    are updating their terms of
                                                    service agreements to
                                                    comply.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    The European Union’s General
                                                    Data Protection Regulation
                                                    (G.D.P.R.) goes into effect
                                                    on May 25 and is meant to
                                                    ensure a common set of data
                                                    rights in the European
                                                    Union. It requires
                                                    organizations to notify
                                                    users as soon as possible of
                                                    high-risk data breaches that
                                                    could personally affect
                                                    them.
                                                </p>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button onClick={onClick}>
                                                I accept
                                            </Button>
                                            <Button
                                                color="gray"
                                                onClick={onClick}
                                            >
                                                Decline
                                            </Button>
                                        </Modal.Footer>
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
