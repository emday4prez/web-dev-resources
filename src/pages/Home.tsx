import {useFetch} from '../hooks/useFetch.jsx'
import BlogList from '../components/BlogList.jsx'
import './Home.css';

export default function Home() {
  const {data, isPending, error } = useFetch('http://localhost:3001/blogs')
  return (
    <div>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>loading...</p>}
      {data && <BlogList blogs={data}/>}
    </div>
  );
}
