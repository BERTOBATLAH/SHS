import React, { useState } from "react";
import { Button, Modal, Label, TextInput } from "flowbite-react";

export default function MFB() {
    const [showModal, setShowModal] = useState(true;
    return (
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
                            <Label htmlFor="nama" value="Nama" />
                        </div>
                        <TextInput id="nama" required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="alamat" value="Alamat Anda" />
                        </div>
                        <TextInput id="alamat" required={true} />
                    </div>
                    <div className="w-full">
                        <Button>Log in to your account</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
