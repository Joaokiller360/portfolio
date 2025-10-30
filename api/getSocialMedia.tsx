import { GetStaticProps } from 'next';

export interface Socialmedia {
  icon: string;
  link: string;
  id: number;
}

const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL;

export const fetchSocialMedias = async (): Promise<Socialmedia[]> => {
  try {
    const response = await fetch(`${apiUrl}/api/social-media?populate=socialMedia`);
    const data = await response.json();

    const socialMediaArray = data?.data?.socialMedia;

    if (!Array.isArray(socialMediaArray)) {
      console.error("❌ Estructura inesperada. No es un array:", data);
      return [];
    }

    return socialMediaArray.map((item: any) => ({
      id: item.id ?? 0,
      icon: item.icon ?? "",
      link: item.link ?? "",
    }));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
};


export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchSocialMedias();

  return {
    props: { data },
    revalidate: 120,
  };
};
