import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="home-container">
                <h1>RetroZone</h1>
                <h2>Revive la historia, juega el futuro.</h2>
                <p>Los mejores clásicos y novedades en un solo lugar. Desde 8 bits hasta 4K.</p>
                <button onClick={() => navigate("/tienda")}>START GAME</button>
            </div>
        </div>
    )
}

export default Home;