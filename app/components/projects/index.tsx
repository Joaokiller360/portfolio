'use client'

import { Cards } from '@/app/utils'
import { useEffect, useState } from "react";

export default function Projects() {
  const [project, setProject] = useState<any>({
    tags: [],
    projects: [],
    buttons: [],
    Descriptio: null,
  });

  const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL;

  useEffect(() => {
    async function fetchProjst() {
      try {
        const response = await fetch(`${apiUrl}/api/projects?populate=*`);
        if (!response.ok) throw new Error("Error al obtener los proyectos");

        const data = await response.json();
        console.log("📦 Datos crudos:", data);

        const rawProjects = data.data.map((p: any) => {
          // Normalizar campos que vienen del JSON
          const description = Array.isArray(p.Description) && p.Description.length > 0
            ? {
                id: p.Description[0].id,
                clientProject: p.Description[0][" clientProject"]?.trim() || "", // eliminamos espacio
                description: p.Description[0].description || "",
                active: p.Description[0].active ?? false,
              }
            : null;

          const buttons = Array.isArray(p.button)
            ? p.button.filter((b: any) => b.active)
            : [];

          const tags = Array.isArray(p.Tags)
            ? p.Tags.map((t: any) => ({
                id: t.id,
                IconName: t.IconName,
                Icon: t.Icon || null,
              }))
            : [];

          return {
            id: p.id,
            titleProject: p.titleProject,
            image: p.image,
            imageAlt: p.imageAlt,
            buttons,
            tags,
            description,
          };
        });

        setProject({
          tags: rawProjects.flatMap((p: any) => p.tags || []),
          projects: rawProjects,
          buttons: rawProjects.flatMap((p: any) => p.buttons || []),
          Description: rawProjects[0]?.description || null,
        });

      } catch (err) {
        console.error("❌ Error:", err);
      }
    }

    fetchProjst();
  }, []);

  console.log("🧠 Estado actual:", project);

  return (
    <section className="py-16" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
        Mis Proyectos
      </h2>

      <div className="md:columns-2 xl:columns-3 gap-6">
        {project.projects.map((p: any) => (
          <div key={p.id} className="break-inside-avoid mb-6 min-h-auto">
            <Cards
              titleProject={p.titleProject}
              clientProject={p.description?.clientProject || "Sin cliente"}
              description={p.description?.description || "Sin descripción"}
              buttons={p.buttons || []}
              tag={p.tags || []}
              imageUrl={
                p.image?.url
                  ? p.image.url.startsWith('http')
                    ? p.image.url
                    : `${apiUrl}${p.image.url}`
                  : '/mockup/mokaps-jb-ocese.png'
              }              
              imageAlt={p.imageAlt || 'Proyecto sin imagen'}
            />
          </div>
        ))}
      </div>
    </section>
  );
}