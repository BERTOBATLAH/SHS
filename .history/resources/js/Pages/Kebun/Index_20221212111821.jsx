import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Button } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Table } from "flowbite-react";

export default function Kebun(props) {
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");

    return <Authenticated></Authenticated>;
}
