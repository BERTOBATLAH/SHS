import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Dropdown } from "flowbite-react";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
export default function Dashboard(props) {
    const { blok } = usePage().props;
    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("blok.destroy", e.currentTarget.id));
        }
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Blok
                </h2>
            }
        >
            <Head title="blok" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                {props.kebun
                                    ? props.kebun.map((kebun, i) => (
                                          <Dropdown
                                              label="Dropdown"
                                              inline={true}
                                          >
                                              <Dropdown.Item key={i}>
                                                  {props.kebun.nama}
                                              </Dropdown.Item>
                                              <Dropdown.Item>
                                                  Settings
                                              </Dropdown.Item>
                                              <Dropdown.Item>
                                                  Earnings
                                              </Dropdown.Item>
                                              <Dropdown.Item>
                                                  Sign out
                                              </Dropdown.Item>
                                          </Dropdown>
                                      ))
                                    : "Tidak ada data"}
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("blok.store")}
                                >
                                    Create Blok
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
