import LayoutStructure from '../../../components/layout-structure'

export const metadata = { title:'Playlist personality quiz' }

export default function Layout({children}) {
  return (
    <LayoutStructure title="Playlist Personality Quiz">
      {children}
    </LayoutStructure>
  )
}