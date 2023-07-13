export const IconTech = ({ icon: Icon, percentage }: { icon: React.ElementType; percentage: string }) => {
    return (
      <div className="w-[100%] flex flex-col gap-[1rem] items-center justify-center">
        <Icon className="text-[3rem] text-white"/>
        <p className="text-violet-500">{percentage}</p>
      </div>
    );
  };