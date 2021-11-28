import BlockPreview from '../components/block-preview'
import ChannelPreview from '../components/channel-preview'

export default function MoreStories({ post, onOpen, openItems }) {
  const onOpenItem = (e, obj) =>{
    onOpen(e,obj)
  }

  if(post.class == 'Image' )
    return (
      <BlockPreview
        key={post.id}
        title={post.title}
        obj={post}
        onOpenItem={onOpenItem}
        slug={post.id.toString()}
        coverImage={post.image.display.url}
        openItems={openItems}
        description={post.description} />
    )
  else if(post.class == "Channel")
    return (
      <ChannelPreview
        key={post.id}
        obj={post}
        title={post.title}
        onOpenItem={onOpenItem}
        slug={post.id.toString()}
        contents={post.contents}
        openItems={openItems}
        // coverImage={post.image.display.url}
        description={post.description} />
    )
}
