import "../styles/CodingPractice.css";
import Sidebar from "../components/Dashboard/Sidebar";
import TopicCard from "../components/CodingPractice/TopicCard";
import codingTopics from "../data/codingTopics";
import { useState } from "react";

function CodingPractice() {

    const [search, setSearch] = useState("");

    return (

    <div className="dashboard-container">

        <Sidebar />

        <div className="coding-page">

            <h1>Coding Practice</h1>

            <p>

                Master Data Structures & Algorithms one topic at a time.

            </p>

            <input
    type="text"
    className="search-input"
    placeholder="Search topics..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
            <div className="topics-container">

    {

      codingTopics
    .filter((topic) =>
        topic.title.toLowerCase().includes(search.toLowerCase())
    )
    .map((topic, index) => (
        <TopicCard
            key={index}
            icon={topic.icon}
            title={topic.title}
            solved={topic.solved}
            total={topic.total}
        />
    ))

    }

</div>

        </div>

    </div>

);

}

export default CodingPractice;