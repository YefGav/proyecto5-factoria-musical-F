import "./RequestTitleModal.css"
import { useModal } from "../ModalContext";
import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'

export const RequestTitleModal = ({isOpen}) => {

    const {submitTitle} = useModal();
    const [title, setTitle] = useState("");
    const modalRef = useRef(null);

    useEffect(() => {
        if(isOpen && modalRef.current)
            modalRef.current.focus();
    }),[modalRef]

    const handleSubmit = (e) => {
         e.preventDefault();
         if (title.trim() !== ""){
            submitTitle(title);
         }
    }

    return (

        <form className="title"
        tabIndex={-1}
        onKeyDown={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        >
            <label htmlFor="title-inpt">Dale un título a tu proyecto</label>
            <input type="text" id="title-inpt" ref={modalRef} value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="Save"  className= "save" />
        </form>
    )
}

RequestTitleModal.propTypes = {
    isOpen: PropTypes.bool
}

export default RequestTitleModal