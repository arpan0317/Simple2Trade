-- Insert rows into table 'Article'
INSERT INTO Article
    ( -- columns to insert data into
    [ArticleID], [Name]
    )
VALUES
    ( -- first row: values for the columns in the list above
        4, 'Test4'
)
-- add more rows here
GO

SELECT COUNT(*) as ArticleCount
FROM dbo.Article;
-- Query all employee information
SELECT e.ArticleId, e.Name
FROM dbo.Article as e
GO