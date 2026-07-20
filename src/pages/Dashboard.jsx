import "../styles/Dashboard.css";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardCard from "../components/Dashboard/DashboardCard";
import { useNavigate } from "react-router-dom";
import StatsCard from "../components/Dashboard/StatsCard";
import Header from "../components/Dashboard/Header";
import RecentActivity from "../components/Dashboard/RecentActivity";
import {
    FaCode,
    FaFileAlt,
    FaRobot,
    FaBuilding,
    FaChartLine,
    FaStickyNote
} from "react-icons/fa";

function Dashboard() {
     const navigate = useNavigate();

     const stats = [

    {
        title:"Problems Solved",
        value:"145",
        color:"#2563eb"
    },

    {
        title:"Current Streak",
        value:"12 Days",
        color:"#f97316"
    },

    {
        title:"Resume Score",
        value:"82%",
        color:"#22c55e"
    },

    {
        title:"Mock Interviews",
        value:"6",
        color:"#a855f7"
    }

];

const activities = [

    {
        icon:"✅",
        title:"Solved Two Sum",
        time:"10 minutes ago"
    },

    {
        icon:"📄",
        title:"Resume Reviewed",
        time:"1 hour ago"
    },

    {
        icon:"🎤",
        title:"Completed Mock Interview",
        time:"Yesterday"
    },

    {
        icon:"🔥",
        title:"7 Day Streak",
        time:"Today"
    }

];
   return (
     
    <div className="dashboard-container">

        <Sidebar />

        <div className="dashboard">
            <Header />

            <h1>Welcome Back 👋</h1>

            <p className="subtitle">

                Ready to crack your dream company today?

            </p>

            <div className="cards-grid">

    <DashboardCard
   emoji={<FaCode />}
    title="Coding Practice"
    description="Solve DSA questions daily"
    onClick={() => navigate("/coding-practice")}
/>

    <DashboardCard
    emoji={<FaFileAlt />}
    title="Resume Review"
    description="Improve ATS Score"
    onClick={() => navigate("/resume-review")}
/>

   <DashboardCard
   emoji={<FaRobot />}
    title="Mock Interview"
    description="Practice HR & Technical"
    onClick={() => navigate("/mock-interview")}
/>

  <DashboardCard
    emoji={<FaBuilding />}
    title="Companies"
    description="Company-wise Preparation"
    onClick={() => navigate("/companies")}
/>

  <DashboardCard
    emoji={<FaChartLine />}
    title="Analytics"
    description="Track your progress"
    onClick={() => navigate("/analytics")}
/>

   <DashboardCard
    emoji={<FaStickyNote />}
    title="Notes"
    description="Store important notes"
    onClick={() => navigate("/notes")}
/>

<div className="stats-grid">

    {

        stats.map((item,index)=>(

            <StatsCard

                key={index}

                title={item.title}

                value={item.value}

                color={item.color}

            />

        ))

    }

</div>

<h2 className="section-title">

    Recent Activity

</h2>

<div>

    {

        activities.map((activity,index)=>(

            <RecentActivity

                key={index}

                activity={activity}

            />

        ))

    }

</div>

</div>

        </div>

    </div>

);
}

export default Dashboard;