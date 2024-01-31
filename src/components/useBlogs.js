import { useQuery } from 'react-query';
import axios from 'axios';

const useBlogs = () => {
  return useQuery('blogs', async () => {
    const response = await axios.get('https://simple-blog-backend.dev.webundsoehne.com/api/v1/blogs');
    return response.data;
  });
};

export default useBlogs;