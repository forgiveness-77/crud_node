import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function User() {
    const [formData, setFormData] = useState({
        title: '',
        fname: '',
        lname: '',
        email: '',
        password: '',
        position: '',
        Company: '',
        business_arena: '',
        employees: '',
        street: '',
        information: '',
        zipCode: '',
        place: '',
        country: '',
        code: '',
        phoneNumber: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/user/create', formData);
            console.log(response.data);
            setFormData({
                title: '',
                fname: '',
                lname: '',
                email: '',
                password: '',
                position: '',
                company: '',
                business_arena: '',
                employees: '',
                street: '',
                information: '',
                zipCode: '',
                place: '',
                country: '',
                code: '',
                phoneNumber: '',
            });
            navigate('/users');
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div>
        <form onSubmit={handleSubmit} >
            <div class="grid grid-cols-2 grid-flow-row gap-0 rounded-lg mx-40">

                <div class="grid grid-cols-2 gap-4 p-10 my-10 bg-white h-full text-black">
                    <h1 class="text-blue-800">General Information</h1>
                    <div class="col-span-2 bg-teal-400 ">
                        <select
                            name="title"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent "
                        >
                            <option value="" disabled selected hidden>Title</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">2</option>
                        </select>
                    </div>
                    <div class="col-span-1 bg-teal-400">
                        <input
                            type="text"
                            placeholder="First Name"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange}  
                        />
                    </div>
                    <div class="col-span-1 bg-teal-400">
                        <input
                            type="text"
                            placeholder="Last Name"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div class="col-span-2 bg-teal-400">
                        <select
                            name="position"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        >
                            <option value="" disabled selected hidden>Title</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">2</option>
                        </select>
                    </div>
                    <div class="col-span-2 bg-teal-400">
                        <input
                            type="text"
                            placeholder="Company"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div class="col-span-1 bg-teal-400">
                        <input
                            type="text"
                            placeholder="Business Arena"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div class="col-span-1 bg-teal-400">
                        <select
                            name="employees"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        >
                            <option value="" disabled selected hidden>Title</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">2</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-4 p-10 my-10 bg-blue-800 h-full text-white">
                    <h1>Contact details</h1>
                    <div class="col-span-3 bg-teal-400">
                        <input
                            type="text"
                            placeholder="Street+Nr"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div class="col-span-3 bg-teal-400">
                        <input
                            type="text"
                            placeholder="Additional Information"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div class="col-span-1 bg-teal-400">
                        <input
                            type="text"
                            placeholder="Zip Code"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div class="col-span-2 bg-teal-400">
                        <select
                            name="place"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        >
                            <option value="" disabled selected hidden>Place</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">2</option>
                        </select>
                    </div>
                    <div class="col-span-3 bg-teal-400">
                        <select
                            name="country"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        >
                            <option value="" disabled selected hidden>Place</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">2</option>
                        </select>
                    </div>
                    <div class="col-span-1 bg-teal-400">
                        <input
                            type="text"
                            placeholder="Code +"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div class="col-span-2 bg-teal-400">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div class="col-span-3 bg-teal-400">
                        <input
                            type="text"
                            placeholder="Additional Information"
                            class="border-b-2 border-gray-400 focus:border-purple-500 outline-none px-2 py-1 w-full h-10 bg-transparent"
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div class="col-span-3">
                        <p class="text-xsm">I do accept the <a href="#" class="text-underline">Terms and Conditions</a> of your site.</p>
                        <input type="checkbox" name="checkbox"/>
                            <span class="checkmark"></span>
                    </div>
                    <div class="rounded-lg">
                        <button class="col-span-1 bg-teal-400 bg-white text-black p-2 text-sm rounded-full">Register Badge</button>
                    </div>
                </div>

            </div>
</form >
</div>

  );
}

export default User;