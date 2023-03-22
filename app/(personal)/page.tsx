import { HomePage } from 'components/pages/home/HomePage'
import { HomePagePreview } from 'components/pages/home/HomePagePreview'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getHomePage } from 'lib/sanity.client'
import { getPreviewToken } from 'lib/sanity.server.preview'
import { notFound } from 'next/navigation'

export default async function IndexRoute() {

  const data = (await getHomePage({ })) || {
    title: '',
    overview: [],
    showcaseProjects: [],
  }

  if (!data ) {
    notFound()
  }

  return (
    <>
      <div>
        homepage
      </div>
      
      {/* bring back HomePage component and poison is fixed */}
      {/* <HomePage data={data} /> */}

    </>
  )
}
