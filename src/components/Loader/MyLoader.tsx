import ContentLoader from "react-content-loader";


export const MyLoader = () => (
    <ContentLoader
        speed={1}
        max-width={1200}
        height={400}
        viewBox="0 0 1200 400"
        backgroundColor="#dedede"
        foregroundColor="#f5f5f5"
    >
        <rect x="425" y="56" rx="5" ry="5" width="665" height="40"/>
        <rect x="7" y="15" rx="5" ry="5" width="405" height="295"/>
        <rect x="425" y="111" rx="5" ry="5" width="665" height="40"/>
        <rect x="425" y="166" rx="5" ry="5" width="665" height="40"/>
        <rect x="425" y="18" rx="5" ry="5" width="95" height="21"/>
    </ContentLoader>
);