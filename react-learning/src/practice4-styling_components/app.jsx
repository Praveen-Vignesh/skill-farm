import React from "react";

import ProfileCard from "./profileCard";
import './style.css';

const App = () => {

    const styles = {
        appContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '5px',
            padding: '20px'
        }
    }

    return (
        <div style={styles.appContainer}>
            <ProfileCard 
                name="Alex Johnson"
                role="Software Engineer"
                projects = {34}
                followers={1200}
                following={500}

            />

            <ProfileCard 
                name="Maria Garcia"
                role="Product Manager"
                projects = {28}
                followers={980}
                following={300}
            />

            <ProfileCard
                name="Liam Smith"
                role="UX Designer"
                projects = {15}
                followers={750}
                following={200}
            />

            <ProfileCard
                name="Sophia Lee"
                role="Data Scientist"
                projects = {22}
                followers={1100}
                following={400}
            />
        </div>
    );
};

export default App;