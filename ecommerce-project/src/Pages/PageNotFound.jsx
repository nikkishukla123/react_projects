
 import { Header } from '../components/Header'
 export function PageNotFound () {
    return(
        <>
        <title>NotFound</title>
        <Header />
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
        </div>
      </>
  
    )
}