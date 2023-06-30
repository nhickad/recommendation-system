import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const SEARCH_GENRE_LIMIT = 20;
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    /**
     * @param config.recommendation - boolean
     * @param config.search - boolean
     */
    const prepareBooks = (docs,config = {}) => {
        if (docs) {
            const newBooks = docs.slice(0, 20).map((bookSingle) => {
                const {
                    key,
                    author_name,
                    cover_i,
                    edition_count,
                    first_publish_year,
                    title,
                } = bookSingle;

                return {
                    id: key,
                    author: author_name || "",
                    cover_id: cover_i,
                    edition_count: edition_count,
                    first_publish_year: first_publish_year,
                    title: title,
                };
            });

            console.log(newBooks);
            setBooks(newBooks);

            if (config.recommendation) {
                setResultTitle(`Recommendation: ${selectedGenre}`)
            } else {
                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!");
                }
            }
            
        } else {
            setBooks([]);
            setResultTitle("No Search Result Found!");
        }
    };

    const fetchBooks = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const { docs } = data;

            prepareBooks(docs);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    const searchGenre = useCallback(async () => {
        if(selectedGenre.length === 0) return;
        setLoading(true);
        const url = `https://openlibrary.org/search.json?subject=${selectedGenre}&limit=${SEARCH_GENRE_LIMIT}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        prepareBooks(data.docs, {
            recommendation: true
        });

        setLoading(false);
    }, [selectedGenre]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider
            value={{
                loading,
                books,
                setSearchTerm,
                selectedGenre,
                searchGenre,
                setSelectedGenre,
                resultTitle,
                setResultTitle,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
