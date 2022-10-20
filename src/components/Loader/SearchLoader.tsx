import ContentLoader from "react-content-loader";


export const SearchLoader = () => (
    <ContentLoader
        speed={2}
        max-width={1200}
        height={460}
        viewBox="0 0 1200 460"
        backgroundColor="#dedede"
        foregroundColor="#f5f5f5"
    >
        <rect x="8" y="44" rx="2" ry="2" width="274" height="274" />
        <rect x="299" y="43" rx="2" ry="2" width="274" height="274" />
        <rect x="590" y="43" rx="2" ry="2" width="274" height="274" />
        <rect x="880" y="43" rx="2" ry="2" width="274" height="274" />
    </ContentLoader>
);