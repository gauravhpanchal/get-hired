import { Skeleton } from "./ui/skeleton";

const Shimmer = () => {
  return (
    <div className="grid grid-col-1 mt-10 md:grid-cols-2 grid-rows-3 gap-16 lg:grid-cols-3">
      {Array(28)
        .fill(0)
        .map((_, index) => (
          <div className="flex items-center space-x-4" key={index}>
            <Skeleton className="h-12 w-12" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
