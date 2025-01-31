interface Tag {
  name: string;
  icon: React.ReactNode;
}

interface TagsProps {
  tag?: Tag[];
}

export default function Tags({ tag = [] }: TagsProps) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {tag.map((tech, index) => (
          <div key={index} className="flex items-center gap-1 p-2 px-4 py-1 text-base font-medium border-2 text-colorButton border-colorButton hover:bg-colorButton hover:text-white cursor-default transition-all rounded-full shadow">
            <span className="icon text-2xl flex justify-center">{tech.icon}</span> {/* Renderiza el ícono */}
            <span className="text-sm font-medium">{tech.name}</span> {/* Renderiza el nombre */}
          </div>
        ))}
      </div>
    </>
  );
}