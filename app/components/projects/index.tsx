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


  // Obtener todos los proyectos con populate=*
  async function fetchAllProjects() {
    try {
      const response = await fetch(`${apiUrl}/api/projects?populate[Descriptio][populate]=*&populate[Tags][populate]=*&populate[button][populate]=*&populate[image][populate]=*`);
      if (!response.ok) throw new Error("Error al obtener los proyectos");

      const data = await response.json();
      console.log("📦 Datos crudos (todos):", data);

      const rawProjects = data.data.map((p: any) => normalizeProject(p));

      setProject({
        tags: rawProjects.flatMap((p: any) => p.tags || []),
        projects: rawProjects,
        buttons: rawProjects.flatMap((p: any) => p.buttons || []),
        Description: rawProjects[0]?.description || null,
      });
    } catch (err) {
      console.error("❌ Error (todos):", err);
    }
  }

  // Obtener un proyecto por id con populate=*
  async function fetchProjectById(id: string) {
    try {
      const response = await fetch(`${apiUrl}/api/projects/${id}?populate[Descriptio][populate]=*&populate[Tags][populate]=*&populate[button][populate]=*&populate[image][populate]=*`);
      if (!response.ok) throw new Error("Error al obtener el proyecto por id");

      const data = await response.json();
      console.log("📦 Datos crudos (por id):", data);

      const p = data.data;
      const projectNormalized = normalizeProject(p);

      setProject({
        tags: projectNormalized.tags || [],
        projects: [projectNormalized],
        buttons: projectNormalized.buttons || [],
        Description: projectNormalized.descriptio || null,
      });
    } catch (err) {
      console.error("❌ Error (por id):", err);
    }
  }

  // Normaliza un proyecto recibido de la API
  function normalizeProject(p: any) {
    const descriptio = Array.isArray(p.Descriptio) && p.Descriptio.length > 0
      ? p.Descriptio.map((d: any) => ({
          id: d.id,
          clientProject: d.clientProject?.trim() || "",
          description: d.description || "",
          active: d.active ?? false,
        }))
      : [];

    const buttons = Array.isArray(p.button)
      ? p.button.filter((b: any) => b.active)
      : [];

    const tags = Array.isArray(p.Tags)
      ? p.Tags.map((t: any) => ({
          id: t.id,
          IconName: t.IconName,
          Icon: t.IconName || null,
        }))
      : [];

    return {
      id: p.id,
      titleProject: p.titleProject,
      image: p.image,
      imageAlt: p.imageAlt,
      buttons,
      tags,
      descriptio,
    };
  }

  // Llama a fetchAllProjects al montar el componente
  useEffect(() => {
    fetchAllProjects();
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
              Descriptio={p.descriptio || []}
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