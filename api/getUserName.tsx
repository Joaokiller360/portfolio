import { GetStaticProps } from 'next';

export interface UserName {
  id: number;
  userName: string;
  dev: string;
  email: string;
}

const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL;

export const fetchUserName = async (): Promise<UserName[]> => {
  try {
    const response = await fetch(`${apiUrl}/api/about`);
    const data = await response.json();

    if (!data || !data.data) {
      console.error("Estructura de datos inesperada:", data);
      return [];
    }

    const item = data.data;

    return [
      {
        id: item.id ?? 0,
        userName: item.userName ?? 'Joao Barres', // ← ojo con la minúscula
        dev: item.dev ?? 'Desarrollador Web / Junior',
        email: item.email ?? 'joao1.joao3@gmail.com',
      },
    ];

  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchUserName();

  return {
    props: { data },
    revalidate: 120, // Revalida cada 10 segundos
  };
};