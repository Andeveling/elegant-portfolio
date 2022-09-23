import { Container, Text } from '@nextui-org/react'

export default function Header() {
  return (
    <>
      <Container
        fluid
        alignContent='center'
        justify='center'
        css={{
          minHeight: '85vh',
          bg: '$backgroundContrast',
          pt: '$10',
          pb: '$10',
          display: 'flex',
          flexDirection: 'column',
          borderBottom: '10px solid $warning',
        }}>
        <Text css={{ fontWeight: 900 }} size={100} h1>
          &lt;WEB DEVELOPER&#8725;&gt;
        </Text>
        <Text
          css={{
            lineHeight: '$9xl',
            textAlign: 'center',
          }}
          weight='bold'
          h2>
          Hi wellcome to my portfolio Iam
        </Text>
        <Text
          css={{
            lineHeight: '$9xl',
            textAlign: 'center',
            bg: '$backgroundAlpha',
            m: 0,
            p: 0,
          }}
          weight='bold'
          size={80}
          h1
          transform='uppercase'>
          Andres Parra
        </Text>
        <Text
          css={{
            lineHeight: '$9xl',
            textAlign: 'center',
          }}
          weight='bold'
          h2>
          Web developer
        </Text>
      </Container>
    </>
  )
}
