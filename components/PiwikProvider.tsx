'use client'
import PiwikProProvider from '@piwikpro/next-piwik-pro'

export default function PiwikProvider({ children }) {
  return (
    <PiwikProProvider
      containerUrl="https://memofamille.piwik.pro"
      containerId="8f40a43d-a65a-4d5b-9349-9a9a372b871e"
    >
      {children}
    </PiwikProProvider>
  )
}
