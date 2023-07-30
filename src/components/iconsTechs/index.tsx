export const IconTech = ({ icon: Icon,title }: { icon: React.ElementType; title:string }) => {
    return (
      <div className="w-[100%] flex flex-col gap-[1rem] items-center justify-center">
        <p className="text-violet-500">{title}</p>
        <Icon className="text-[3rem] text-white"/>
      </div>
    );
  };