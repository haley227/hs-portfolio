import Image from "next/image";

export const GridImage = ({ imgSrc, imgAlt, imgLink, title, caption }: {imgSrc: string; imgAlt?: string; imgLink: string; title: string; caption: string;}) => {
    return (
      <a href={imgLink} className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">    
          <Image src={imgSrc} alt={imgAlt ?? ''} width={700} height={700}
            className="group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700 dark:text-white">{title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900 dark:text-gray-100">{caption}</p>
      </a>
    );
  }