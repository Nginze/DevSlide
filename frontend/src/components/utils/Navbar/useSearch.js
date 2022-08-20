import { useEffect, useState } from 'react'
import useDebounceValue from './useDebounceValue';

const useSearch = () => {
  const [searchTerm, setTerm] = useState("");
  const [searchResults, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const debounceValue = useDebounceValue(searchTerm);
  useEffect(() => {
    if (!searchTerm) {
      setLoading(false)
      return;
    }

    (async () => {
      setLoading(true);
      const result = await fetch(
        `http://localhost:5000/search?keyw=${searchTerm}`
      );
      const data = await result.json();
      setResults(data);
      setLoading(false);
    })();
  }, [debounceValue]);

  return {searchResults, searchTerm, setTerm, isLoading}
}

export default useSearch