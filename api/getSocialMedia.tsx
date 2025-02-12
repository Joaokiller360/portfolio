export interface Socialmedia {
  icon: string;
  link: string;
  id: number;
}

const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL

export const fetchSocialMedias = async (): Promise<Socialmedia[]> => {
  try {
    const response = await fetch(`${apiUrl}/api/social-media-porfolios`);
    const data = await response.json();

    if (!data || !data.data) {
      console.error("Estructura de datos inesperada:", data);
      return [];
    }

    return data.data.map((item: any) => ({
      id: item.id ?? 0, // Asegurar que haya un ID
      icon: item.Icon ?? "",
      link: item.Link ?? "",
    }));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
};
