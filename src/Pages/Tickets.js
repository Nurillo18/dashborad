
import React from "react";
import TicketsTop from "../Components/TicektsTop/TicketsTop";
import TicketsMain from "../Components/TicketsMain/TicketsMain";

const Tickets = () => {
    return (
        <div className="tickets">
            <TicketsTop/>
            <TicketsMain/>
        </div>
    )
}

export default Tickets