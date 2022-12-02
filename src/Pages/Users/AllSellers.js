import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { GoVerified } from 'react-icons/go'
import { VscUnverified } from 'react-icons/vsc'
import { MdDeleteSweep } from 'react-icons/md'
import toast from 'react-hot-toast';


const AllSellers = () => {

    const [verifi, setVerifi] = useState(true)


    //FIND USER BASED ON ROLE=============================
    const { data: allSeller = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`https://server-bice-beta.vercel.app/alluser?userRole=seller`);
            const data = await res.json();
            return data
        }
    })
    console.log(allSeller);

    // HANDLE VERIFICATION
    const handleVerification = () => {
        setVerifi(false)
        toast.success('Verified!')
    }

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
                        allSeller.map(seller => <tr key={seller._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold text-2xl">{seller.name}</div>
                                        {
                                            seller.verified === false && verifi ?
                                                <><p className='text-red-500'><VscUnverified /></p></> :
                                                <><p className='text-blue-500'><GoVerified /></p></>
                                        }
                                        <div className="text-[10px] opacity-70 bg-slate-300 rounded-xl px-3">{seller.verified === false && verifi ? "Not Verified" : "Verified"}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className='uppercase '>{seller.userRole}</p>
                                <br />
                                <span className="badge badge-ghost badge-sm px-3 py-2">{seller.email}</span>
                            </td>
                            <td><button onClick={handleVerification} className='btn btn-ghost btn-sm'>Verifiy?</button></td>
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
                        <th>Role</th>
                        <th>Verifiy</th>
                        <th>Remove</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default AllSellers;