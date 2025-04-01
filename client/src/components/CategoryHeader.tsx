interface CategoryHeaderProps {
  title: string;
  icon: string;
  id: string;
}

export function CategoryHeader({ title, icon, id }: CategoryHeaderProps) {
  return (
    <div 
      id={id}
      className="category-header mb-6 py-3 px-4 bg-[#A0522D] border-b-4 border-[#5E2F0D] rounded-t-md shadow-lg prehistoria-decoration"
    >
      <h3 className="text-2xl font-minecraft text-[#F5DEB3] text-shadow flex items-center">
        <i className={`fas ${icon} mr-3`}></i> 
        <span className="relative">
          {title}
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#8B4513] opacity-50"></span>
        </span>
      </h3>
    </div>
  );
}
