export const IconTech = ({ icon: Icon, percentage,title }: { icon: React.ElementType; percentage: string; title:string }) => {
    return (
      <div className="w-[100%] flex flex-col gap-[1rem] items-center justify-center">
        <p>{title}</p>
        <Icon className="text-[3rem] text-white"/>
        <p className="text-violet-500">{percentage}</p>
      </div>
    );
  };