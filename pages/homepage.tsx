import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/loginPage">Login</Link>
        </div>
    );
};

export default HomePage;
