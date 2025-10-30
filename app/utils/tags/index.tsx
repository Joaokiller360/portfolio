import * as SiIcons from 'react-icons/si';

interface Tag {
  id: number;
  IconName: string;
  Icon: string | null;
}

interface TagsProps {
  tag?: Tag[];
}

export default function Tags({ tag = [] }: TagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tag.map(({ Icon, id }) => {
        const IconComponent = Icon ? SiIcons[`Si${Icon}` as keyof typeof SiIcons] : null;
        return (
          <div
            key={id}
            className="flex items-center gap-1 p-2 px-4 py-1 text-base font-medium border-2 text-colorButton border-colorButton hover:bg-colorButton hover:text-white cursor-default transition-all rounded-full shadow"
          >
            <span className="icon text-2xl flex justify-center">
              {IconComponent ? <IconComponent className="mr-2" /> : null}
            </span>
            <span className="text-sm font-medium">{Icon}</span>
          </div>
        );
      })}
    </div>
  );
}