import { Nav } from "../components/Nav";
import { GridImage } from "../components/Image";
import { sql } from '@vercel/postgres'

export default async function Portfolio() {
    const data = await sql`SELECT * FROM projects_list`;
    const { rows: projects } = data;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ gap: '100px'}}>
            <Nav />
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 dark:text-white">
                    <div className="listProjects">
                        {projects.map((project) => {
                            const { project_name, description, link, thumbnail } = project;
                            return (
                              <GridImage imgSrc={thumbnail || "/placeholder.jpg"} imgLink={link || '#'} title={project_name} caption={description} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}