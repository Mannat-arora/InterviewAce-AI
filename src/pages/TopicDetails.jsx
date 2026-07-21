import { useParams } from "react-router-dom";

function TopicDetails() {

    const { topicName } = useParams();

    return (
        <div style={{ padding: "40px" }}>
            <h1>{topicName}</h1>
            <p>Questions for {topicName} will appear here.</p>
        </div>
    );
}

export default TopicDetails;