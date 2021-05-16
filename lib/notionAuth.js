const { Client } = require("@notionhq/client");

const NOTION_API_KEY = "secret_497cqZDE8OKKgnJbfD2j3PMwvj2er9IZq7XGIn7IrYI";

const notion = new Client({
  auth: NOTION_API_KEY,
});

(async () => {
  const databaseId = "67bf1694-4eb6-4b40-b54e-75a50acbd1c8";
  const response = await notion.databases.retrieve({ database_id: databaseId });
  console.log(response);
})();
