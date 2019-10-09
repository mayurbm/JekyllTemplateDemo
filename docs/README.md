# Jekyll Template for SAP-internal Documentation

You can use this template to create your own internal SAP documentation based on GitHub Pages.
You can use it for blogs or more "static content".
>The template does not contain "legal links", like copyright, terms of use, and disclaimers. If you want to use it for external customer documentation, they have to be added!

You can use either Markdown or HTML to create new files.

> If you want to learn more about Markdown, you can use [https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/).

Just put the new file in the folder of the category where you want to add something.
Let it be reviewed and edited, it will then be available in the correct section automatically.

Of course, you can adapt the styling etc.

## Basic Setup
1. Create a GitHub repository where the page is hosted (you can also reuse an existing one, just create a separate branch...)
1. In the repository settings, enable *GitHub Pages* and select the branch where you want to put the site content.
1. Launch the *Automatic Page Generator* once without any content and choose any template you want.
1. Keep the **params.json** file and delete all other files.
1. Clone the repository to your PC.
1. Put all template files in your local folder.
1. Make the adaptations described below.
1. Commit to GitHub.
1. Start adding content

## Make Settings in the `_config.yml` File
Adapt the following settings:
- title: Title of Your Site
- repository: Your Repository
- branch: master or gh-pages

## Define Categories and Subcategories
Decide which categories and subcategories you want to have.
The template contains two default categories with subcategories.
Make sure that you use unique names for the subcategories, the same subcategory name should not be used in different categories. (If this is necessary, it makes the setup more complex...)
1. Rename the folders accordingly.
1. Search and replace the following terms in the full project (case-sensitive!):
  - category1
  - Category1
  - subcategory1_1
  - Subcategory1_1
  - subcategory1_2
  - Subcategory1_2
  - subcategory1_3
  - Subcategory1_3
  - category2
  - Category2
  - subcategory2_1
  - Subcategory2_1
  - subcategory2_2
  - Subcategory2_2
  - subcategory2_3
  - Subcategory2_3

If you need more categories and/or subcategories, follow the procedures below.

## Exchange Images
You can choose your own images as background and for the icon that is used in the Browser tab, just save your own files in the `/css/img` folder with the following names:
- Background.jpg (size: 2600px * 1730 px)
- favicon.ico (size: 32px * 32px)

## Define Settings for Search
Edit the following sections of the `tipuesearch_set.js` file:
- `tipuesearch_weight` defines the weighting of search results
- `tipuesearch_stem` contains synonyms for search terms

## Define Home Page
Describe the purpose of your page and the project in the `index.md` file.

# Adding Content

## Blog
Blog posts are created like this:
1.  Create a file in the `_posts` folder. The name of the file has to start with a date (recommended: publishing date), for example: "2018-05-31-Hello_World"
2.  At the top of the file, put the "front matter" section, and add title, author name, and a list of tags that are relevant for this article:
    ```
    ---
    title: Title of the Article
    author: Your Name (optional)
    authorID: GitHub User Name (optional)
    tags: [tag1, tag2]
    ---
    ```
   > **Recommendation**: Define a set of allowed tags, e.g. all subcategories.


## Static Content (Categories, Subcategories)

1.  Create a file in the related folder or one of the subfolders.
2.  At the top of the file, put the "front matter" section:
    ```
    ---
    title: Title of the Article
    author: Your Name (optional)
    authorID: GitHub User Name (optional)
    last_update: Current Date (in YYYY-MM-DD format)
    tags: [e.g. other subcategories] (optional)
    priority: (value between 0..5 to sort chapters per subcategory, default is 5) (optional)
    ---
    ```

# Some Remarks

## Images

Store the image in the `images` folder and include it in your text via the following code:

```
![Alternative text](<{{site.baseurl}}/images/filename.ext> "Tooltip text")
````
(Replace "Alternative text", "filename.ext", "Tooltip text" (optional).)

> Visio viewer is not supported. If you want to use Visio, you can save your drawing as SVG. It can then be included as image.

You can also use Markdown Mermaid to create diagrams and flowcharts, see [https://mermaidjs.github.io/](https://mermaidjs.github.io/).
Just make sure that you embed the graphic code in a "mermaid div" like this:

```
<div class="mermaid">
graph LR
        A-->B
        B-->C
        C-->A
        D-->C
</div>
```

## Links
If you want to link to a page, use the following syntax

```
[Link text]({{ site.baseurl }}collection/subfolder/filename)
```
(Replace "Link text", "collection (without `_`!)", "subfolder" (if needed), "filename" (without file extension!).)

### External Links
Links to external URLs that should open in a new window, so please add `{:target="&#95;blank"}` to those links:
```
[Link text](URL){:target="&#95;blank"}
```
(Replace "Link text", "URL".)

### Links to Articles Under "`_posts`"

```
[Link text]({{ '/blog/filename' }}
```
(Replace "Link text",  "filename" (without the date and without file extension!, e.g. `_posts\2018-05-17-Cisco-UCS.md` should be linked as "`{{ site.baseurl }}blog/Cisco-UCS`").)

## Tables
Table features are very limited in Markdown. If you need a table with more "styling", you should create an html table (can also be included in an .md file). If you're not sure how to do this, you could try an HTML table generator like [https://www.tablesgenerator.com](https://www.tablesgenerator.com). Don't use any real data in the generator, because the data may be confidential!

> You can make HTML tables sortable by adding `class="sortable"` to the `<table>` tag.

# Local Preview

If you want to have a local preview of the documentation, e.g. to preview your changes before creating a pull request, you can set up the Jekyll site generator as described here: [Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/).

****
# For Editors
## Adding a New category
1. Create a new folder `_newcategory` under root directory.
1. Create a new `index.html` file in the new folder with ONLY the following content:
   ```
   ---
   title: NewCategory (Contents)
   category: NewCategory
   subcategory: Index
   layout: index
   ---
   ```
1. Add the collection to the `_config.yml` file:
    ```
    #Collections:
    collections:
    [...]
      newcategory:
         output: true
    [...]
    ```
1. Create new default values in the `_config.yml` file:
    ```
    defaults:
     -
      scope:
          path: "_newcategory"
      values:
        category: "NewCategory"
     ```
    (Make sure that you use the correct intendation.)
1. Add the category to the tipue search collections in the `_config.yml` file.

## Adding a New subcategory
1. Create a new folder `newsubcategory` under folder of the superordinate category (wihtout `_`)
1. Add the collection to the `_config.yml` file:
    ```
    #Collections:
    collections:
    [...]
      category:
         output: true
         newsubcategory:
            output: true
    [...]
    ```
1. Create new default values in the `_config.yml` file:
    ```
    defaults:
     -
      scope:
          path: "category/newsubcategory"
      values:
        category: "category"
        subcategory: "NewSubcategory"
     ```

# Helper Pages for Doc Admins

Page [{{site.baseurl}}/review_required]({{site.baseurl}}/review_required) lists all pages that have "Review required" as "Last Update" date.

Page [{{site.baseurl}}/page_age]({{site.baseurl}}/page_age) shows the content pages by age. This can be used to check which pages should maybe be updated, because they are older than 6/3/1 months.
