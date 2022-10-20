import React from "react";
import ContentLoader from "react-content-loader";


export const LeaderboardLoader = () => {
    return (
        <ContentLoader
            speed={2}
            width={1200}
            height={470}
            viewBox="0 0 1200 470"
            backgroundColor="#e0dcdc"
            foregroundColor="#c2c1c1"
        >
            <rect x="23" y="17" rx="0" ry="0" width="570" height="60" />
            <rect x="23" y="97" rx="0" ry="0" width="570" height="64" />
            <rect x="22" y="175" rx="0" ry="0" width="570" height="63" />
            <rect x="24" y="255" rx="0" ry="0" width="570" height="62" />
            <rect x="23" y="338" rx="0" ry="0" width="570" height="54" />
            <rect x="23" y="416" rx="0" ry="0" width="570" height="53" />
        </ContentLoader>
    );
};

