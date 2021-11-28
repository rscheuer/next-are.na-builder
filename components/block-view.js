import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import markdownToHtml from '../lib/markdownToHtml'

export default function BlockView({
  title,
  coverImage,
  date,
  excerpt,
  author,
  description,
  slug,
  onOpenItem,
  obj
}) {

  function convertLinks(derText){
    //replace the linebreaks with <br>
    derText = derText.replace(/(?:\r\n|\r|\n)/g, '<p></p>');
    //check for links [text](url)
    let elements = derText.match(/\[.*?\)/g);
    if( elements != null && elements.length > 0){
      for(var el of elements){
        let txt = el.match(/\[(.*?)\]/)[1];//get only the txt
        let url = el.match(/\((.*?)\)/)[1];//get only the link
        derText = derText.replace(el,'<a class="underline hover:text-blue-600 cursor-pointer" href="'+url+'" target="_blank">'+txt+'</a>')
      }
    }
    return derText;
  }


  function createMarkup() {
    // return {__html: convertLinks(description)};
    return {__html: description};
  }

  const handleClick = (e) =>{
    console.log("block preview clicked")
    console.log(e, obj)
    onOpenItem(e, obj)
  }

  return (
    // <Link as={`/work/${slug}`} href="/work/[slug]">
    <section className="snap-start flex-shrink-0 w-full lg:w-96 md:w-full p-5 pt-0 z-10 overflow-y-auto hide-scroll-bar">
    <div className="grid grid-cols-1 md:grid-cols-1 md:gap-x-16 lg:gap-x-16 gap-y-5 md:gap-y-5 mb-0 pt-5">
      <div className="p-5 grid grid-cols-6  bg-gray-100 rounded" onClick={handleClick}>
        <div className="relative col-span-6 mb-5">
          <CoverImage
            slug={slug}
            title={title}
            // src={coverImage}
            objectFit="contain"
            src={`/api/imgproxy?url=${encodeURIComponent(coverImage)}`}
            height="100%"
            width="100%"
            className="rounded"
          />
        </div>
        <div className="col-span-6">
          <h3 className="text-2xl leading-snug">
            {/* <Link as={`/work/${slug}`} href="/work/[slug]"> */}
              <p>{title}</p>
            {/* </Link> */}
          </h3>
          {
          description &&
          <div dangerouslySetInnerHTML={createMarkup()} />
          }
          
        </div>
        {/* <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div> */}
        {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    </div>
  </section>
    
    // </Link>
  )
}
