// UsersTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div className="text-center text-gray-800 mt-4">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600 mt-4">Error: {error.message}</div>;
    }

    return (
        <div className="mx-auto max-w-screen-lg p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">User List</h2>
            <div className="overflow-x-auto">
                <table className="table-auto min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">First Name</th>
                            <th className="px-4 py-2">Last Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Position</th>
                            <th className="px-4 py-2">Company</th>
                            <th className="px-4 py-2">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {users.map(user => (
                            <tr key={user._id} className="hover:bg-gray-100">
                                <td className="border px-4 py-2">{user.title}</td>
                                <td className="border px-4 py-2">{user.fName}</td>
                                <td className="border px-4 py-2">{user.lName}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">{user.position}</td>
                                <td className="border px-4 py-2">{user.Company}</td>
                                <td className="border px-4 py-2">{user.phoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;
