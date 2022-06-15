import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

const swLinks = [
    {
        url: "https://www.facebook.com/StarWars",
        name: "facebook_logo",
        component: <FacebookLogoSVG />,
    },
    {
        url: "https://www.instagram.com/starwars/",
        name: "instagram_logo",
        component: <InstagramLogoSVG />,
    },
    {
        url: "https://twitter.com/starwars",
        name: "twitter_logo",
        component: <TwitterLogoSVG />,
    },
    {
        url: "https://www.youtube.com/user/starwars",
        name: "youtube_logo",
        component: <YoutubeLogoSVG />,
    },
];

export const Footer = ({theme}) => {
    return (
        <div className={`footer ${theme}`}>
            <h4>FOLLOW STAR WARS</h4>
            <div className="links-layout-footer">
                {swLinks.map((link) => (
                    <a
                        key={link.name}
                        className="link"
                        href={link.url}
                        target="_blank"
                        alt={link.name}
                        rel="noreferrer"
                    >
                        {link.component}
                    </a>
                ))}
            </div>
        </div>
    );
};
