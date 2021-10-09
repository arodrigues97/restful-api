import { Article } from "./../resource/Article"

/**
 * Represents a non persistent store of @link Article objects
 */
export class ArticleStore {
  /**
   * The array of articles
   */
  readonly articles: Article[] = [
    {
      id: 1,
      name: "Adam's Article",
    },
    {
      id: 2,
      name: "Dmitri's Article",
    },
  ]

  /**
   * Stores an article to the article sotrage lsit
   * @param article The article to store
   */
  store = (article: Article) => this.articles.push(article)

  /**
   * @returns The list of articles
   */
  getArticles = () => this.articles

  /**
   * @param name The article name to search for
   * @returns The article
   */
  getArticleByName = (name: string) =>
    this.articles.find((article) => article.name === name)
}

export const articleStore = new ArticleStore()
