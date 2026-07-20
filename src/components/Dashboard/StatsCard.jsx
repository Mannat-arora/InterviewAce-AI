import "../../styles/StatsCard.css";

function StatsCard({ title, value, color }) {

    return (

        <div
            className="stats-card"
            style={{ borderLeft: `6px solid ${color}` }}
        >

            <h4>{title}</h4>

            <h2>{value}</h2>

        </div>

    );

}

export default StatsCard;