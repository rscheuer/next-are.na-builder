import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="pl-5 pr-5 flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Site
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Running on {CMS_NAME}.
      </h4>
    </section>
  )
}
