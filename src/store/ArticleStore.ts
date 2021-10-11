import { Article } from "./../resource/Article"

/**
 * Represents a non persistent store of @link Article objects
 */
export class ArticleStore {
  /**
   * The array of articles
   */
  articles: Article[] = [
    {
      id: 1,
      name: "wiki",
      content: "Wiki content",
    },
    {
      id: 2,
      name: "rest_api",
      content: "Rest api content",
    },
  ]

  configureMockData = (mockData: Article[]) => {
    this.articles = mockData
  }

  /**
   * Stores an article to the article storage lsit
   * @param article The article to store
   */
  store = (article: Article) => this.articles.push(article)

  /**
   * Updates an existing article in the store
   * @param article The article to update
   */
  update = (article: Article) => {
    const copy = [...this.articles].filter((a) => a.id !== article.id)
    copy.push(article)
    this.articles = copy
  }

  /**
   * @returns The list of articles
   */
  getArticles = () => this.articles

  /**
   * @param name The article name to search for
   * @returns The article
   */
  getArticleByName = (name: string): Article | undefined =>
    this.articles.find((article) => article.name === name)
}

export const articleStore = new ArticleStore()
