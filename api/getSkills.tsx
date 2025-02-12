import { GetStaticProps } from 'next';

export interface Skills {
  icon: string;
  iconName: string;
  id: number;
}

const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL

export const fetchSkills = async (): Promise<Skills[]> => {
  try {
    const response = await fetch(`${apiUrl}/api/skills`);
    const data = await response.json();

    if (!data || !data.data) {
      console.error("Estructura de datos inesperada:", data);
      return [];
    }

    return data.data.map((item: any) => ({
      id: item.id ?? 0, // Asegurar que haya un ID
      icon: item.Icon ?? '',
      iconName: item.IconName ?? '',
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
