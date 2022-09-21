import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { NextUIProvider } from "@nextui-org/react"
import { Theme } from "./Theme"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider theme={Theme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
)
