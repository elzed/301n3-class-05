// The following is an example for the Class 05 Pair Assignment to be completed Wednesday, September 7th
articleView.initNewArticlePage = function () {
    // TODO: Ensure the main .tab-content area is revealed.
    // We might add more tabs later.

    // $('.tab-content').show();    // was removed later when realized it's not doing anything


    $('#article-export').hide();
    $('#article-json').on('focus', function() {
        console.log("input changed");
        this.select();
    });

    // TODO: Add an event handler to update the preview and the export field
    $('#new-form').on('change', 'input, textarea', articleView.create);
};


aritcleView.create = function () {
    // TODO: Set up a var to hold the new article we are creating.
    // Clear out the #articles element, so we can put in the updated preview
    var article;

    $('#article-preview').empty();  // emptied to make sure nothing is there before appending to it

    article = new Article({
        title: $('#article-title').val(),
        body: $('#article-body').val(),
        author: $('#article-author').val(),
        authorUrl: $('#article-author-url').val(),
        category: $('#article-category').val(),
        publishedOn: $('#article-published').is(':checked') ? new Date() : null
    });

    $('#article-preview').append(article.toHtml());

    $('#article-export').show();    // hidden earlier in script

    $('#article-json').val(JSON.stringify(article));    // make it into a string before displaying it



};



articleView.initIndexPage = function() {
    articleView.populateFilters();
    articleView.handleCategoryFilter();
    articleView.handleAuthorFilter();
    articleView.handleMainNav();
    articleView.setTeasers();
};
