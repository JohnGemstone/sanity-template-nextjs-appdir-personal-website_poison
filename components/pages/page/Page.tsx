import CallOut from 'components/shared/CallOut'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import IconPicker from 'components/shared/IconPicker'
import ScrollUp from 'components/shared/ScrollUp'
import type { PagePayload } from 'types'

export function Page({ data }: { data: PagePayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data || {}

  return (
    <div>
      <div className="mb-14">
        {/* Header */}
        <Header title={title} description={overview} />

        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
            value={body}
          />
        )}

        {/* Dynamic Component */}
        <IconPicker className='text-5xl' provider='ai' name={title == "Test Page" ? 'AiOutlineCheckCircle' : 'AiOutlineCloseCircle'} />
        
        
        {/* Static Component With next/link */}
        <CallOut />
        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}
