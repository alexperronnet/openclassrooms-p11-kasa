import { useEffect, useState } from 'react'

export default function useFetch() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return data
}
