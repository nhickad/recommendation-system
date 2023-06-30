import React, { useState } from "react";
import { useGlobalContext } from "../../context.";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    // search | recommendation
    const [activeTab, setActiveTab] = useState("search");
    const navigate = useNavigate();

    const {
        selectedGenre,
        setSelectedGenre,
        searchGenre
    } = useGlobalContext();

    const recommendations = [
        {
            label: "Horror",
            value: "horror",
        },
        {
            label: "Literature",
            value: "literature",
        },
        {
            label: "Fantasy",
            value: "fantasy",
        },
        {
            label: "Comedy",
            value: "comedy",
        },
        {
            label: "Romance",
            value: "romance",
        },
    ];

    const recommend = () => {
        searchGenre();
        navigate("/book");
    }

    return (
        <div className="holder">
            <header className="header">
                <Navbar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">
                        find your book of choice.
                    </h2>
                    <br />
                    <p className="header-text fs-18 fw-3">
                    <br />
                    Welcome to READIFY. Discover your next great read with our powerful search and personalized recommendations. Find books tailored to your interests and uncover hidden literary gems. Start your literary adventure today. Happy reading!
                    </p>

                    <div className="header-controls">
                        <div className="tab-action-container">
                            <button
                                className={`tab-action ${activeTab === "search" && "active"}`}
                                onClick={() => setActiveTab("search")}
                            >
                                Search
                            </button>
                            <button
                                className={`tab-action ${activeTab === "recommendation" && "active"
                                    }`}
                                onClick={() => setActiveTab("recommendation")}
                            >
                                Recommendation
                            </button>
                        </div>

                        {activeTab === "search" ? (
                            <SearchForm />
                        ) : (
                            <div className="recos">
                                <select
                                    className="tab-options"
                                    value={selectedGenre}
                                    onChange={(e) => setSelectedGenre(e.target.value)}
                                >
                                    <option className="tab-option" value="">
                                        Select a genre
                                    </option>
                                    {recommendations.map((recommendation, i) => (
                                        <option
                                            className="tab-option"
                                            key={i}
                                            value={recommendation.value}
                                        >
                                            {recommendation.label}
                                        </option>
                                    ))}
                                </select>

                                <button onClick={() => recommend()}>Show recommendations</button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
