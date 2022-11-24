import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ScheduleModal from './ScheduleModal';

const DisplaySchedule = ({ selected }) => {
    const [scheduleInfo, setScheduleInfo] = useState([]);

    const [serviceName, setServiceName] = useState(null);

    const date = format(selected, 'PP');

    // console.log(serviceName);

    useEffect(
        () => {
            fetch('appointmentOptions.json')
                .then(res => res.json())
                .then(data => setScheduleInfo(data))
        }
        , [])

    return (
        <div>
            <h2 className='text-6xl my-16 text-center'>
                these are available s c h e d u l i n g options, date: {format(selected, 'PP')}
            </h2>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    scheduleInfo.map(service => <div className="card bg-primary text-primary-content" key={service._id}>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-semibold">{service.name}!</h2>
                            <p>{service.slots.length} {service.slots.length > 1 ? 'spaces' : 'space'} available!</p>
                            <p>{service.slots.length > 0 ? service.slots[0] : 'Try another time'}</p>
                            <div className="card-actions justify-end">
                                {/* The button to open modal */}
                                <label disabled={service.slots.length === 0} htmlFor="sch-modal" className="btn" onClick={() => setServiceName(service)}>open modal</label>
                            </div>
                        </div>
                        {serviceName &&
                            <ScheduleModal
                                serviceName={serviceName}
                                date={date}
                            ></ScheduleModal>}
                    </div>)
                }
            </div>


        </div>
    );
};

export default DisplaySchedule;