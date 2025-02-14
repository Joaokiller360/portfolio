'use client'

import { Cards } from '@/app/utils'

import { fetchProjst, Tag, Project } from '@/api/getPorjets'
import { useEffect, useState } from "react";

export default function Projects() {

  const [project, setProject] = useState<{
    tags: Tag[]; // Definimos correctamente el tipo de `tags`
    projects: Project[];
  }>({
    tags: [],
    projects: [],
  });

  const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL

  useEffect(() => {
    async function fetchProjst() {
      try {
        const response = await fetch(`${apiUrl}/api/projects?populate=*`);
        if (!response.ok) {
          throw new Error("Error al obtener los proyectos");
        }
        const data = await response.json();

        const rawProjects = data.data.map((project: Project) => ({
          ...project,
          tag: project.tag?.map((t: any) => ({
            id: t.id,
            IconName: t.IconName || 'Sin nombre',
            Icon: t.Icon || null, // En lugar de convertir a ReactNode, dejamos el nombre del icono
          })),
        }));
        
        setProject({
          tags: rawProjects.flatMap((p: { tag: any }) => p.tag || []),
          projects: rawProjects,
        });        
      } catch (err) {
        console.error("Error:", err);
      }
    }

    fetchProjst();
  }, []);

  return (
    <>
      <section className="py-16" id="projects">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.projects.map((project) => {
            return (
              <Cards
                key={project.id}
                titleProject={project.titleProject}
                clientProject={project.clientProject}
                description={project.description}
                hrfCode={project.hrfCode}
                hrfDemo={project.hrfDemo}
                tag={project.tag}
                imageUrl='/mockup/mokaps-jb-ocese.png'
              />
            )
          })}
        </div>
      </section>
    </>
  );
}
