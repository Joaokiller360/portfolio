import { GetStaticProps } from 'next';

export interface Skills {
  IconName: string;
  id: number;
}

const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL

export const fetchSkills = async (): Promise<Skills[]> => {
  try {
    const response = await fetch(`${apiUrl}/api/skill?populate=Icon`);
    const data = await response.json();

    const skills = data?.data?.Icon;

    if (!Array.isArray(skills)) {
      console.error("Estructura de datos inesperada:", data);
      return [];
    }

    return skills.map((item: any) => ({
      id: item.id ?? 0, // Asegurar que haya un ID
      IconName: item.IconName ?? '',
    }));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchSkills();

  return {
    props: { data },
    revalidate: 120, // Revalida cada 10 segundos
  };
};
