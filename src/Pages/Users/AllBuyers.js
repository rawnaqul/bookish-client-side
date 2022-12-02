import { useQuery } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { GoVerified } from 'react-icons/go'
import { VscUnverified } from 'react-icons/vsc'
import { MdDeleteSweep } from 'react-icons/md'

const AllBuyers = () => {

    //FIND USER BASED ON ROLE=============================
    const { data: allBuyers = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`https://server-bice-beta.vercel.app/alluser?userRole=buyer`);
            const data = await res.json();
            return data
        }
    })

    // console.log(allBuyers);


    return (
        <div className="overflow-x-auto w-full mt-10">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Verifiy</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}

                    {
                        allBuyers.map(buyer => <tr key={buyer._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold text-2xl">{buyer.name}</div>
                                        {
                                            buyer.verified === false ?
                                                <><p className='text-red-500'><VscUnverified /></p></> :
                                                <><p className='text-blue-500'><GoVerified /></p></>
                                        }
                                        <div className="text-[10px] opacity-70 bg-red-300 rounded-xl px-3">{buyer.verified === false ? "Not Verified" : "Verified"}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className='uppercase '>{buyer.userRole}</p>
                                <br />
                                <span className="badge badge-ghost badge-sm px-3 py-2">{buyer.email}</span>
                            </td>
                            <td><button className='btn btn-ghost btn-sm'>Verifiy?</button></td>
                            <th>
                                <button className="btn btn-ghost text-2xl"><><p className='text-red-500'><MdDeleteSweep /></p></></button>
                            </th>
                        </tr>)
                    }

                </tbody>
                {/* <!-- foot --> */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default AllBuyers;