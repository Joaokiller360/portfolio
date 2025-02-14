import { NextResponse } from "next/server";
import { GetStaticProps } from 'next';

// Definimos la interfaz para los proyectos
export interface Tag {
  id: number;
  IconName: string;
  Icon: string | null;
}

export interface Project {
  id: number;
  documentId: string;
  titleProject: string;
  clientProject: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hrfCode: string;
  hrfDemo: string;
  imageAlt: string;
  tag: Tag[];
}

export interface ApiResponse {
  data: Project[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL

export async function fetchProjst() {
  try {
    // URL de la API
    const api = `${apiUrl}/api/projects?populate=*`;

    // Realiza la solicitud GET
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    // Convierte la respuesta en formato JSON
    const data: ApiResponse = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchProjst();

  return {
    props: { data },
    revalidate: 120, // Revalida cada 10 segundos
  };
};