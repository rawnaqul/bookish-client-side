import React from 'react';

const ScheduleModal = ({ serviceName, date }) => {

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        console.log(name, phone, slot);

    }

    const { name, slots } = serviceName;
    // console.log(serviceName);
    return (
        <div className='my-3'>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="sch-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="sch-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl my-3 font-bold">{name}!</h3>
                    <form className='grid gap-3' onSubmit={handleBooking}>
                        <input type="text" placeholder="" disabled value={date} className="input input-bordered input-secondary w-full" />

                        <select name="slot" className="select select-bordered w-full">
                            <option disabled >What Time Slot?</option>
                            {
                                slots.map((slot, i) =>
                                    <option
                                        key={i}
                                    >{slot}</option>
                                )
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered input-secondary w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-secondary w-full " />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered input-secondary w-full " />
                        <button className='btn btn-accent'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ScheduleModal;