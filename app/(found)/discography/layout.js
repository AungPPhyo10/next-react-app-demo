import LayoutStructure from '../../../components/layout-structure'

export const metadata = { title:'Discography' }

export default function Layout({children}) {
  return (
    <LayoutStructure title="Discography">
      {children}
    </LayoutStructure>
  )
}