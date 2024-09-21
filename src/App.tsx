import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import PageStart from "./routes/PageStart"
import PageSearchPerfilGit from "./routes/PageSearchPerfilGit"

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PageStart />} />
          <Route path="/serach_perfil_git" element={<PageSearchPerfilGit />} />
        </Route>
      </Routes>    
    </BrowserRouter>
     
    </>
  )
}

export default App
