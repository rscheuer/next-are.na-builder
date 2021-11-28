import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width, objectFit }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      // layout="fill"
      width={width}
      height={height}
      objectFit = {objectFit}
    />
    // <img src={src} alt={`Cover image for ${title}`} />
  )
  return (
    <div className="sm:mx-0 relative">
      {slug ? (
        // <Link as={`/work/${slug}`} href="/work/[slug]">
          <a aria-label={title}>{image}</a>
        // </Link>
      ) : (
        image
      )}
    </div>
  )
}
