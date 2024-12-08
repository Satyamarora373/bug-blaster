import React,{useState} from "react";

export default function TicketForm(){

    const [ticket, setTicket]=useState('');
    const [description,setDescription]=useState('');
    const [priority,setPriority]=useState('1');

    const priorityLables = {
        1:'Low',
        2: 'Medium',
        3: 'High'
    }
    return(
        <div>
            <p>Hello</p>
        </div>
    )
}