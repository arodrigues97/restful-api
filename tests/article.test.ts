import superTest from "supertest"
import Api from "../src/api/Api"
import { Article } from "../src/resource/Article"
import { routes } from "../src/routes"
import { articleStore } from "./../src/store/ArticleStore"

const mockData: Article[] = [
  {
    id: 1,
    name: "Test",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    id: 2,
    name: "Test Article 2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
]

describe("Article Controller", () => {
  articleStore.configureMockData(mockData)

  const api = new Api(routes, 9092)
  api.configureRoutes()
  const request = superTest(api.getExpressApp())

  test("GET /articles/", async () => {
    //Send get request to end point
    const res = await request
      .get("/articles")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200)

    const body = res.body

    //Expect if body is an array
    expect(body instanceof Array).toBe(true)

    //Expect the response to be the length of the mock data provided
    expect(body).toHaveLength(mockData.length)

    //Iterate over the items of the body
    for (let item of body) {
      //Expect it to be a string
      expect(typeof item).toBe("string")
    }
  })

  describe("PUT /articles/:name", () => {
    //Ensure article name parameter
    test("catch missing name parameter", async () => {
      await request.put("/articles/%%").expect(400)
    })

    //Create an article
    test("create article", async () => {
      await request
        .put("/articles/test")
        .send(mockData[0].content)
        .expect(201)
    })

    //Update an article
    test("update article", async () => {
      await request
        .put("/articles/" + mockData[0].name)
        .send("Update article content")
        .expect(200)

        
    })
  })

  describe("GET /articles/:name", () => {
    test("return successfull found article", async () => {
      //Found article
      const foundArticle = await request.get("/articles/" + mockData[0].name).expect(200).expect("Content-Type", "text/html; charset=utf-8")
      expect(foundArticle.text).toEqual(articleStore.getArticleByName(mockData[0].name)?.content)
    })

    test("return 404 not found", async () => {
      //Not found article
      await request.get("/articles/unknown").expect(404)
    })
  })
  
})
