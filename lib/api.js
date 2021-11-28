// import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
const Arena = require("are.na");
import markdownToHtml from './markdownToHtml'

const arena = new Arena();

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

// export function getPostBySlug(slug, fields = []) {
//   const realSlug = slug.replace(/\.md$/, '')
//   const fullPath = join(postsDirectory, `${realSlug}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')
//   const { data, content } = matter(fileContents)

//   const items = {}

//   // Ensure only the minimal needed data is exposed
//   fields.forEach((field) => {
//     if (field === 'slug') {
//       items[field] = realSlug
//     }
//     if (field === 'content') {
//       items[field] = content
//     }

//     if (typeof data[field] !== 'undefined') {
//       items[field] = data[field]
//     }
//   })

//   return items
// }

// export function getAllPosts(fields = []) {
//   const slugs = getPostSlugs()
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug, fields))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//   return posts
// }


export async function getChannelContents(channelName){
  var blocks = []
  await arena
    .channel(channelName)
    .get()
    .then(chan => {
      chan.contents.map(async item=>{
        await blocks.push(item)
      })
    })
    .catch(err => console.log(err))

  for(var i = 0; i<blocks.length; i++){
    blocks[i].label = blocks[i].title;
    if(blocks[i].description)
      blocks[i].description = await markdownToHtml(blocks[i].description)
    if(blocks[i].class == "Channel"){
      var subItems = await getSubChannelContents(blocks[i].slug)
      // var subMeta = await getSubChannelInfo(blocks[i].slug)
      console.log("is channel!!!")
      // var newItem = {
      //   base_class: "Channel",
      //   meta: subMeta,
      //   contents: [...subItems],
      // }
      blocks[i].children = await subItems;
    }
  }

  // console.log(blocks)
  return blocks
}

export async function getSubChannelContents(channelName){
  var blocks = []
  await arena
    .channel(channelName)
    .get()
    .then(chan => {
      chan.contents.map(async item=>{
        // console.log(item)
        if(item.description)
          item.description = await markdownToHtml(item.description);
        blocks.push(item)
      })
    })
    .catch(err => console.log(err))

  return blocks
}

export async function getChannelInfo(channelName){
  var info = []
  await arena
      .channel(channelName)
      .get()
      .then(chan=>{
        // console.log(chan)
        var data = {
          cTitle: chan.title,
          cDesc: chan.metadata.description.toString(),
          cUpdated: chan.updated_at,
        }
        info.push(data)
      })
      .catch(err=> console.log(err))
  
  return info
}

export async function getSubChannelInfo(channelName){
  var info = []
  await arena
      .channel(channelName)
      .get()
      .then(chan=>{
        // console.log(chan)
        var data = {
          cTitle: chan.title,
          cDesc: chan.metadata.description.toString(),
          cUpdated: chan.updated_at,
        }
        info.push(data)
      })
      .catch(err=> console.log(err))
  
  return info[0]
}

export async function getBlockById(id){
  var finalBlock = []
  await arena
    .block(id)
    .get()
    .then(block => {
      console.log(block.title)
      finalBlock = block;
    })
    .catch(console.error);

  return finalBlock;
}