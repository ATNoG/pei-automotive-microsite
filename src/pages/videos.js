import Layout from "@theme/Layout";
import VideosPage from "@site/src/components/VideoSection";

export default function Videos() {
    return (
        <Layout
            title="Videos"
            description="Demonstration and promotional videos for Automotive App"
        >
            <div>
                <VideosPage />
            </div>
        </Layout>
    );
}
