import { Button } from "@nextui-org/react"
import { useState } from "react"
import { Navbar } from "./components"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Button shadow color='gradient'>
        Hola
      </Button>
    </>
  )
}

export default App
