import { Button } from '../../ui/button'

interface SectionHomeButtonProps {
  text: string
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'guost'
    | 'sidebar'
    | 'sidebarOutline'
}

export default function SectionHomeButton({
  text,
  variant = 'default',
}: SectionHomeButtonProps) {
  return (
    <Button className="mt-8" size={'lg'} variant={variant}>
      {text}
    </Button>
  )
}
