import { Cards } from '@/app/utils'
import { projects } from '@/data'

export default function Projects() {

  return (
    <>
      <section className="py-16" id="projects">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Cards
              key={`${index}`}
              titleProject={`${project.titleProject}`}
              clientProject={`${project.clientProject}`}
              description={`${project.description}`}
              tag={project.tag}
              hrfCode={project.hrfCode}
              hrfDemo={project.hrfDemo}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}
