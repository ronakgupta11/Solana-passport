
"use client";

export function Loader({message}) {
  return (
    <div className="flex justify-center items-center flex-col flex-wrap gap-2">
      
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
      </div>
      <p className="text-center">{message||""}</p>
    </div>
  );
}
