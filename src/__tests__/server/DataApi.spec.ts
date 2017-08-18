import DataApi from "@server/DataApi";

const data = require("@server/testData");
const api = new DataApi(data);

describe("DataApi", () => {
    it("exposes articles as an object", () => {
        const articles = api.getArticles();
        const articleId = data.article[0].id;
        const articleTitle = data.article[0].title
        expect(articles).toHaveProperty(articleId);
        expect(articles[articleId].title).toBe(articleTitle);
    });

    it ("exposes authors as an object", () => {
        const authors = api.getArticles();
        const authorId = data.article[0].id;
        const authorFirstName = data.article[0].firstName
        expect(authors).toHaveProperty(authorId);
        expect(authors[authorId].firstName).toBe(authorFirstName);
    });
});