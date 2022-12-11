import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layout'
import { Home, About, Rental, NotFound } from '@/pages'
import { useFetch } from '@/hooks'

export default function Router() {
  const data = useFetch()

  const routes = [
    { path: '/', element: <Home data={data} /> },
    { path: '/a-propos', element: <About /> },
    { path: '*', element: <NotFound /> },
    data?.map(item => ({
      path: `/location/${item.id}`,
      element: <Rental />
    }))
  ].flat()

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
