import { VercelRequest, VercelResponse } from '@vercel/node'
import { toJson } from 'rss-converter'

export default async (request: VercelRequest, response: VercelResponse) => {
  const url = request.query.url as string
  const count = request.query.count ?? undefined

  if (!url) {
    return response.status(400).json({
      reason: 'No `url` query-string parameter',
      error: 'You must provide a `url` query-string parameter',
    })
  }

  try {
    const feed = await toJson(url)
    return response.status(200).json({
      ...feed,
      items: feed.items.slice(0, count),
    })
  } catch (error) {
    return response
      .status(400)
      .json({ reason: 'Problem fetching the RSS feed', error: error.message })
  }
}
