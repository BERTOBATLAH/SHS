import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Button, Modal, Label, TextInput } from "flowbite-react";

export default function MFB({ kebun }) {
    const { auth } = usePage().props;
    const [editing, setEditing] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        nama: kebun.nama,
        alamat: kebun.alamat,
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
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="alamat" value="Alamat Anda" />
                        </div>
                        <TextInput
                            id="alamat"
                            required={true}
                            value={data.alamat}
                            type="text"
                            name="alamat"
                            onChange={(e) => setData("alamat", e.target.value)}
                        />
                        <span className="text-red-600">{errors.alamat}</span>
                    </div>
                    {editing ? (
                        <div className="w-full">
                            <Button type="submit">Submit</Button>
                        </div>
                    ) : (
                        <p>hahah</p>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    );
}
