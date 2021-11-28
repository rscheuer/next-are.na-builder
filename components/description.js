import markdownStyles from './markdown-styles.module.css'

export default function Description({ content }) {
  return (
    <div className="description">
      <div
        // className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
