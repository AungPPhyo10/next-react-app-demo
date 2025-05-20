import LayoutStructure from '../../components/layout-structure'

export const metadata = { title:'Connect with music' }

export default function Layout({children}) {
  return (
    <LayoutStructure title="Let's hang around">
      {children}
    </LayoutStructure>
  )
}