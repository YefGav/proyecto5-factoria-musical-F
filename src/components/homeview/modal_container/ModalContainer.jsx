import { Level } from "../../modals/level/Level";
import { Songs } from "../../modals/songs/Songs";
import {Recordings} from "../../modals/recordings/Recordings";
import { Score } from "../../modals/score/Score";
import { useModal } from "../../modals/ModalContext";
import './ModalContainer.css'

export const ModalContainer = () => {
    const { activeModal} = useModal();

    if (!activeModal) return null;
    return (
            <div className="modal-container">
              {activeModal === "openLevel" && <Level />}
              {activeModal === "songs" && <Songs />}
              {activeModal === "score" && <Score />}
              {activeModal === "openRecordings" && <Recordings />}
            </div>
    )
}