
export const StyledCard = ({ title, subtitle, link, Icon }: { title: string, subtitle: string, link: string, Icon?: () => JSX.Element }) => {
  return (
        <a
          href={link}
          className="group rounded-lg border border-transparent px-6 py-12 transition-colors bg-gray-100 hover:bg-gray-200 hover:dark:border-neutral-700 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {title}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
             {Icon && <Icon />}
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {subtitle}
          </p>
        </a>
    );
};