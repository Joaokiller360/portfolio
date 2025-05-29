'use client'

import { Cards } from '@/app/utils'
import { Tag, Project, Buttons, Descriptio } from '@/api/getPorjets'
import { useEffect, useState } from "react";

export default function Projects() {

  const [project, setProject] = useState<{
    tags: Tag[];
    buttons: Buttons[];
    projects: Project[];
    Descriptio: Descriptio | null;  // Cambié esto para que sea un objeto único, no un array.
  }>({
    tags: [],
    projects: [],
    buttons: [],
    Descriptio: null,  // Inicializado como null.
  });  

  const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL;

  useEffect(() => {
    async function fetchProjst() {
      try {
        const response = await fetch(`${apiUrl}/api/projects?populate=*`);
        if (!response.ok) {
          throw new Error("Error al obtener los proyectos");
        }
        const data = await response.json();

        console.log("Datos de los proyectos:", data);

        const rawProjects = data.data.map((project: Project) => ({
          ...project
        }));

        const rawTag = data.data.map((project: Project) => ({
          ...project,
          tag: project.tag?.map((t: any) => ({
            id: t.id,
            IconName: t.IconName || 'Sin nombre',
            Icon: t.Icon || null,
          })),
        }));

        const rawDescriptio = data.data.map((project: Project) => ({
          Descriptio: project.Descriptio ? {
            id: project.Descriptio.id,
            clientProject: project.Descriptio.clientProject,
            description: project.Descriptio.description,
            active: project.Descriptio.active,
          } : null,
        }));

        const rawButton = data.data.map((project: Project) => ({
          button: project.buttons?.map((b: any) => ({
            id: b.id,
            hrfCode: b.hrfCode,
            hrfDemo: b.hrfDemo,
            hrefContent: b.hrefContent,
            active: b.active,
          })) || [],
        }));

        setProject({
          tags: rawTag.flatMap((p: { tag: any }) => p.tag || []),
          projects: rawProjects,
          Descriptio: rawDescriptio[0].Descriptio,
          buttons: rawButton.flatMap((p: { buttons: any }) => p.buttons || [])
        });
      } catch (err) {
        console.error("Error:", err);
      }
    }

    fetchProjst();
  }, []);

  console.log('Descriptio:', project.Descriptio);

  return (
    <>
      <section className="py-16" id="projects">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Mis Proyectos</h2>
        <div className="md:columns-2 xl:columns-3 gap-6">
          {project.projects.map((p) => (  // Renombrar "project" a "p" para evitar confusión
            <div key={p.id} className="break-inside-avoid mb-6 min-h-[400px]">
              <Cards
                titleProject={p.titleProject}
                clientProject={project.Descriptio?.clientProject}
                description={project.Descriptio?.description}
                buttons={p.buttons}
                tag={p.tag}
                imageUrl={p.image?.url || '/mockup/mokaps-jb-ocese.png'}
                imageAlt={p.imageAlt}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}