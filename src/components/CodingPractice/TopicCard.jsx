import "../../styles/TopicCard.css";
import { useNavigate } from "react-router-dom";

function TopicCard({ icon, title, solved, total }) {

    const progress = Math.round((solved / total) * 100);

    const navigate = useNavigate();

    return (

        <div className="topic-card">

            <div className="topic-left">

                <span className="topic-icon">

                    {icon}

                </span>

                <div>

                    <h3>{title}</h3>

                    <p>{solved} / {total} Solved</p>

                    <div className="progress-bar">

    <div

        className="progress-fill"

        style={{ width: `${progress}%` }}

    ></div>

</div>

<span className="progress-text">

    {progress}%

</span>

                </div>

            </div>

           <button
    onClick={() => navigate(`/coding/${title}`)}
>
    Continue →
</button>

        </div>

    );

}

export default TopicCard;