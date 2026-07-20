import "../../styles/RecentActivity.css";

function RecentActivity({ activity }) {

    return (

        <div className="activity-card">

            <span className="activity-icon">

                {activity.icon}

            </span>

            <div>

                <h4>{activity.title}</h4>

                <p>{activity.time}</p>

            </div>

        </div>

    );

}

export default RecentActivity;