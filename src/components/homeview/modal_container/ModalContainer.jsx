import './ModalContainer.css';
import { WelcomeModal } from '../../modals/welcome/WelcomeModal';
import { Level } from "../../modals/level/Level";
import { Songs } from "../../modals/songs/Songs";
import { Score } from "../../modals/score/Score";
import { Recordings } from '../../modals/recordings/Recordings';
import { useModal } from "../../modals/ModalContext";
import { RequestTitleModal } from "../../modals/request_title/RequestTitleModal";

export const ModalContainer = () => {
    const { activeModal} = useModal();

    if (!activeModal) return null;
    return (
        <div className="modal">
            <div className="modal-content">
              {activeModal === "welcome" && <WelcomeModal />}
              {activeModal === "openLevel" && <Level />}
              {activeModal === "songs" && <Songs />}
              {activeModal === "score" && <Score />}
              {activeModal === "endRecording" && <RequestTitleModal isOpen={true} />}
              {activeModal === "openRecordings" && <Recordings isOpen={true} />}

            </div>
        </div>
    )
}