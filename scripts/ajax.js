/*Anu Aryal
03/29/2019
INFO 2220
Prof. Jonathon Holmes
Assignment 8
Objective: This is to create an external JavaScript file for AJAX.
*/


$(document).ready(function () {
    $("#btnSearch").click(function () {
        $.ajax({
            url: "data/books.json",
            url: "data/people.json",
            success: function (jsonMatter) {

          
                var txtVal = $("#txtSearch").val().toLowerCase();
                var details = $("details");
                if (jsonMatter.ok == "true") {
                    details.empty();
                    for (var i = 0; i < jsonMatter.data.length; i++) {

                        var book = jsonMatter.data[i];

                        var titleSearch = book["Title"].text.toLowerCase().indexOf(txtVal) > -1;
                        var authorSearch = book["Author"].text.toLowerCase().indexOf(txtVal) > -1;
                        var ISBNSearch = book["ISBN"].text.toLowerCase().indexOf(txtVal) > -1;
                        var tagsSearch = book["Tags"].text.toLowerCase().indexOf(txtVal) > -1;

                        if (titleSearch || authorSearch || ISBNSearch || tagsSearch) {
                            var newRow = $("<tr></tr>");

                            newRow.append($("<td></td>").text(book.Title));
                            newRow.append($("<td></td>").text(book.ISBN));
                            newRow.append($("<td></td>").text(book.Author.FirstName + " " + book.Author.MiddleName + " " + book.Author.LastName));
                            newRow.append($("<td></td>").text(book.Tag));

                            details.append(newRow);
                        }
                    }

                }
            }
        });
        return true;
    });
});
