export interface UserName {
  id: number;
  userName: string;
  dev: string;
  email: string
}

const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL

export const fetchUserName = async (): Promise<UserName[]> => {
  try {
    const response = await fetch(`${apiUrl}/api/user-names`);
    const data = await response.json();

    if (!data || !data.data) {
      console.error("Estructura de datos inesperada:", data);
      return [];
    }

    return data.data.map((item: any) => ({
      id: item.id ?? 0, // Asegurar que haya un ID
      userName: item.userName ?? 'Joao Barres',
      dev: item.dev ?? 'Desarrollador Web / Junior',
      email: item.email ?? 'joao1.joao3@gmail.com'
    }));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
};
