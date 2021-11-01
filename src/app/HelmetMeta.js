import React from "react";
import Helmet from "react-helmet";
import Resume from "../settings/resume.json";
import Settings from "../settings/settings.json";

export const HelmetMeta = () => {
    return (
        <Helmet>
            <meta name="theme-color" content={Settings.colors.primary} />
            <title>Aakanksha Bhende</title>
            <meta name="author" content="Aakanksha Bhende"/>
            <meta name="description" content="I'm a Computer Science Undergrad" />
            <meta name="keywords" content={Resume.basics.keywords} />
        </Helmet>
    );
};
