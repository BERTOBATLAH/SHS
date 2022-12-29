import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";

export default function Kebun(props) {
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [show, setShow] = useState(false);

    function onClose(e) {
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
                                    <Button
                                        onClick={
                                            show === false
                                                ? setShow(true)
                                                : setShow(false)
                                        }
                                    >
                                        Toggle modal
                                    </Button>
                                    <Modal
                                        show={show}
                                        size="md"
                                        popup={true}
                                        onClose={onClose}
                                    >
                                        <Modal.Header />
                                        <Modal.Body>
                                            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                                    Sign in to our platform
                                                </h3>
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label
                                                            htmlFor="email"
                                                            value="Your email"
                                                        />
                                                    </div>
                                                    <TextInput
                                                        id="email"
                                                        placeholder="name@company.com"
                                                        required={true}
                                                    />
                                                </div>
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label
                                                            htmlFor="password"
                                                            value="Your password"
                                                        />
                                                    </div>
                                                    <TextInput
                                                        id="password"
                                                        type="password"
                                                        required={true}
                                                    />
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <Checkbox id="remember" />
                                                        <Label htmlFor="remember">
                                                            Remember me
                                                        </Label>
                                                    </div>
                                                    <a
                                                        href="/modal"
                                                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                                    >
                                                        Lost Password?
                                                    </a>
                                                </div>
                                                <div className="w-full">
                                                    <Button>
                                                        Log in to your account
                                                    </Button>
                                                </div>
                                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                                    Not registered?{" "}
                                                    <a
                                                        href="/modal"
                                                        className="text-blue-700 hover:underline dark:text-blue-500"
                                                    >
                                                        Create account
                                                    </a>
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
