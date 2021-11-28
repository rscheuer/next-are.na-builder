import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  description,
  slug,
  contents,
  onOpenItem,
  obj,
  openItems,
}) {




  function createMarkup() {
    // return {__html: convertLinks(description)};
    return {__html: description};
  }

  const handleClick = (e) =>{
    console.log("channel preview clicked")
    console.log(e, obj)
    onOpenItem(e, obj)
  }


  var activeObj = false; 
  if(openItems!=null){
    if(openItems.id == obj.id){
      activeObj=true;
    }
  }


  return (
    // <Link as={`/work/${slug}`} href="/work/[slug]">
    <div className="p-5 grid grid-cols-4  bg-gray-100 rounded" 
    className={activeObj ? 'p-5 grid grid-cols-6  bg-gray-200 rounded text-black hover:bg-gray-300 transition-colors': 'p-5 grid grid-cols-6  bg-gray-00 rounded hover:bg-gray-100 transition-colors'}
      onClick={handleClick}>
      {/* <div className="relative col-span-1">
      </div> */}
      <div className="ml-0 col-span-3">
        <h3 className="text-3xl leading-snug">
          {/* <Link as={`/work/${slug}`} href="/work/[slug]"> */}
            <p>{title}</p>
            {/* <span> Children: {contents.length}</span> */}
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
    // </Link>
  )
}
