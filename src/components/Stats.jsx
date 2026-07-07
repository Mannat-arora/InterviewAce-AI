import "../styles/Stats.css";

function Stats() {

    const stats = [
        {
            number:"5000+",
            title:"Students"
        },
        {
            number:"150+",
            title:"DSA Questions"
        },
        {
            number:"200+",
            title:"Companies"
        }
    ];

    return(
<section className="stats">

<h2>Trusted by Future Engineers</h2>

<div className="stats-container">
{
stats.map((item,index)=>(
    <div className="stat-card" key={index}>

        <h1>{item.number}</h1>

        <p>{item.title}</p>

    </div>
))
}
</div>

</section>
    );

}

export default Stats;