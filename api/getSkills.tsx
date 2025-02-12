export interface Skills {
    icon: string;
    iconName: string;
    id: number;
  }
  
  export const fetchSkills = async (): Promise<Skills[]> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKND_URL}/api/skills`);
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
  