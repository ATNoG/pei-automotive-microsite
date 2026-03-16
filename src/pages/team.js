import Layout from "@theme/Layout";
import TeamPage from "@site/src/components/TeamMembers";

export default function Team() {
    return (
        <Layout
            title="Team"
            description="Meet the team behind the Automotive App"
        >
            <div>
                <TeamPage />
            </div>
        </Layout>
    );
}
