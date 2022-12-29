import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Button, Modal, Label, TextInput, Select } from "flowbite-react";

export default function MFB(props) {
    const { data, setData, post, processing, reset, errors } = useForm({
        nama: "",
    });

    const submit = (e) => {
        e.preventDefault();
        setSending(true);
        patch(route("kebun.update", kebun.id), {
            onSuccess: () => setEditing(false),
        });
    };

    return (
        <Modal
            show={props.showModal}
            size="md"
            popup={true}
            onClose={() => props.setShowModal(false)}
            onSubmit={submit}
        >
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Input Data Kebun
                    </h3>
                    {/* drop down */}

                    <div id="select">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="countries"
                                value="Select your country"
                            />
                        </div>
{posts.map(
                                        ({
                                            id,
                                            nama_kebun,
                                            nama,
                                            alamat,
                                            i,
                                        }) => (
                        <Select id="countries" required={true}>
                            <option>United States</option>
        </Select>
        )}
                                    {posts.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t text-center"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                    </div>

                    {/* end dropdown */}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="nama" value="Nama" />
                        </div>
                        <TextInput
                            id="nama"
                            required={true}
                            value={data.nama}
                            type="text"
                            name="nama"
                            onChange={(e) => setData("nama", e.target.value)}
                        />
                        <span className="text-red-600">{errors.nama}</span>
                    </div>

                    <div className="w-full">
                        <Button type="submit">Submit</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
