import { Content } from "../Content/Content"
import { Box } from "./Box"

interface Props {
  children: JSX.Element[] | JSX.Element
}

export const Layout = ({ children }: Props) => (
  <Box
    css={{
      maxW: "100%",
    }}>
    {children}
  </Box>
)
