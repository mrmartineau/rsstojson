<div align="center">
  <h1>RSS to JSON API</h1>
  <p>API to convert RSS feeds to JSON</p>
  <p>
    <a
      href="https://github.com/mrmartineau/rsstojson/blob/master/LICENSE"
    >
      <img
        src="https://img.shields.io/badge/license-MIT-blue.svg"
        alt="rsstojson is released under the MIT license."
      />
    </a>
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs welcome!"
    />
    <a href="https://twitter.com/intent/follow?screen_name=MrMartineau">
      <img
        src="https://img.shields.io/twitter/follow/MrMartineau.svg?label=Follow%20@MrMartineau"
        alt="Follow @MrMartineau"
      />
    </a>
  </p>
</div>

Once deployed, the API will be available at the following URL:

```
https://{YOUR_DOMAIN}/api/rss?url={RSS_FEED_URL}
```

Example response from my blog's RSS feed: `https://zander.wtf/atom.xml`

```json
{
  "title": "Zander Martineau's Blog",
  "description": "Zander Martineau's personal site",
  "link": "https://zander.wtf",
  "generator": "GatsbyJS",
  "lastBuildDate": "Tue, 11 Jan 2022 12:25:25 GMT",
  "items": [
    {
      "title": "Announcing Code Notes",
      "description": "Like a lot of developers I spend a lot of my time searching Google for answers to things that I should know how to do. For example, how to…",
      "link": "https://zander.wtf/blog/code-notes-release",
      "guid": "https://zander.wtf/blog/code-notes-release",
      "pubDate": "Thu, 11 Jun 2020 00:00:00 GMT",
      "content_encoded": "...",
      "guid_isPermaLink": "false"
    }
  ]
}
```

It uses the [`rss-converter`](https://github.com/morx3x/rssConverter) library to convert the RSS feed to JSON and exposes an API to retrieve that response.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmrmartineau%2Frsstojson)

---

## License

[MIT](https://choosealicense.com/licenses/mit/) © [Zander Martineau](https://zander.wtf)

> Made by Zander • [zander.wtf](https://zander.wtf) • [GitHub](https://github.com/mrmartineau/) • [Twitter](https://twitter.com/mrmartineau/)
