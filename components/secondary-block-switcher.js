import BlockPreview from '../components/block-preview'
import ChannelPreview from '../components/channel-preview'
import MoreBlocks from '../components/more-blocks'
import BlockView from './block-view'

export default function SecondaryBlockSwitcher({ post, onOpen }) {

  
  console.log("POST CONTENTSSSSSSSS",post)

  const onOpenItem = (e, obj) =>{
    // console.log(obj)
    onOpen(e,obj)
  }
  // console.log(post)

  console.log('--------------')
  console.log("CLASS OF POST", post.class)

  if(post.class == 'Image' )
    return (
        <BlockView
          key={post.id}
          title={post.title}
          obj={post}
          onOpenItem={onOpenItem}
          slug={post.id.toString()}
          coverImage={post.image.display.url}
          description={post.description} />
    )
  else if(post.class == "Channel")
      console.log(post.contents)
    return (
      <MoreBlocks onOpenItem={onOpenItem} posts={post.children} year={""} month={""} desc={post.metadata.description} />
    )
}
