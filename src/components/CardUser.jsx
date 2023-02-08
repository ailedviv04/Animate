import React, { Fragment, useState } from 'react';
//import ChipUser from './ChipUser';
//import ModalEpisode from './ModalEpisode';

const CardUser = ({ id, name, gender, origin, type, image, color, status }) => {
    const[idSelect, setIdSelect] = useState(null);

    const firstLetter = () => {
      return name.charAt(0);
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
        setIdSelect(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Fragment>
            <div id={id} style={{ width: "33%" }}>
                <div style={{ backgroundColor: color, width: "20px", height: "20px" }}></div>
            </div>
        </Fragment>
    );
}

export default CardUser;