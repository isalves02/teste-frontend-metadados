import "./Loading.sass";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Loading () {
    return (
        <>
            <div className="loading flex justify-center">
                <span className="icon">
                    <FontAwesomeIcon icon={faSpinner} size="5x" color="#ff6f61"></FontAwesomeIcon>
                </span>
            </div>
        </>
    )
}