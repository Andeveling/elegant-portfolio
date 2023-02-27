import { Button, Text } from '@nextui-org/react'
import { TranslationIcon } from '../Icons'

export const ChangeLanguageButton = ({ languageHandle, lang }: { languageHandle: () => void; lang: 'es' | 'en' }) => (
  <Button
    onPress={languageHandle}
    rounded
    color='warning'
    size='md'
    bordered
    auto
    css={{
      minWidth: 60,
    }}
    icon={<TranslationIcon />}>
    <Text b>{getTextButton(lang)}</Text>
  </Button>
)

const getTextButton = (lang: 'es' | 'en') => {
  const langSelect = {
    en: 'Español',
    es: 'English',
  }
  return langSelect[lang]
}
