import styles from "./styles.module.css";

const videos = [
    {
        title: "Demo Video",
        src: "/pei-automotive-microsite/video/AutomotiveAppDemo.mp4",
    },
    {
        title: "Promotional Video",
        src: "/pei-automotive-microsite/video/AutomotiveAppPromotional.mp4",
    },
];

function VideoCard({ title, src }) {
    return (
        <div className={styles.card}>
            <div className={styles.videoWrapper}>
                <video
                    controls
                    className={styles.video}
                    preload="metadata"
                >
                    <source src={src} type="video/mp4" />
                </video>
            </div>
            <h3 className={styles.title}>{title}</h3>
        </div>
    );
}

export default function VideosPage() {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Videos</h2>
                <div className={styles.cardsGrid}>
                    {videos.map((video) => (
                        <VideoCard key={video.title} {...video} />
                    ))}
                </div>
            </div>
        </div>
    );
}
