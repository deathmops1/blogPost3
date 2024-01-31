declare const useBlogs: () => {
    isLoading: boolean;
    error: Error | null;
    data: BlogPost[];
  };
  
  export default useBlogs;