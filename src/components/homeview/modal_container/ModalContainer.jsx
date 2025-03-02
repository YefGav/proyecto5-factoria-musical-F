import { Level } from "../../modals/level/Level";
import { Songs } from "../../modals/songs/Songs";
import { Score } from "../../modals/score/Score";
import { Recordings } from '../../modals/recordings/Recordings';
import { useModal } from "../../modals/ModalContext";

export const ModalContainer = () => {
    const { activeModal} = useModal();

    if (!activeModal) return null;
    return (
        <div className="modal">
            <div className="modal-content">
              {activeModal === "openLevel" && <Level />}
              {activeModal === "songs" && <Songs />}
              {activeModal === "score" && <Score />}
              {activeModal === "openRecordings" && <Recordings />}
            </div>
        </div>
    )
}