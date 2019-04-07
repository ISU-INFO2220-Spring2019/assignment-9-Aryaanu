/*Anu Aryal
03 / 15 / 2019
INFO 2220
Professor Jonathon Holmes
Assignment 7
Objective: This assignment is to create an external javascript file with jQuery.
*/

//Reference : https://wwww.w3schools.com


$(document).ready(function () { 
    $("#btnChangeSpan").click(function () {
        $("#spnOne").text("New Text for the Span");
    });
     
    $("#btnAppendToSpan").click(function () {
        $("#spnOne").append(" == Text at the back");
    });
     
    $("#btnPrependToSpan").click(function () {
        $("#spnOne").prepend(" Text at the front -- ");
    });
     
    $("#btnBeforeSpan").click(function () {
        $("#spnOne").before("Text Before ++");
    });
     
    $("#btnAfterSpan").click(function () {
        $("#spnOne").after(" @@ Text After");
    });
     
    $("#btnShowSpan").click(function () {
        alert($("#spnOne").text());
    });
    
    $("#btnNumberPs").click(function () {
        $("#divNumbers > p").each(function () {
            $(this).prepend(" " + ($(this).index() + 1) + ". ");
        });
    });
    
    $("#btnClassPSuccess").click(function () {
        $("#divclass > p").each(function () {
          return $(this).toggleClass("success");
        });

    });
    
    $("#btnClassPWarning").click(function () {
        $("#divclass > p").each(function () {
            return $(this).toggleClass("error");
        });

    });
    
    $("#btnClassPError").click(function () {
        $("#divclass > p").each(function (index) {
            if (index % 2 == 0) {
                return $(this).toggleClass("warning");
            }

        });

    });
    
    $("#btnAddLastNames").click(function () {
        $("div:eq(3) p span:nth-child(1)").append("<strong> Flintstone </strong>");
        $(".bff").append("<em> Rubble </em>");
        $("div:eq(3) p span:nth-child(3)").append("<del> the Dinosaur </del>");
    });
     
    $("#btnRemoveLarry").click(function () {
        $("ul > li").each(function () {
            $("#first").remove();

        });
    });
    
    $("#btnClearCurly").click(function () {
        $("ul > li").each(function () {
            $("#second").empty();

        });
    });
    
    $("#btnRemoveMoeLastName").click(function () {
        $("ul > li").each(function () {
            $("#third > span").remove();

        });
    });
     
    $("#btnRemoveShempLastName").click(function () {
        $("ul > li").each(function () {
            $("#third + li > span").remove();

        });
    });
   
    $("#btnChangeText").click(function () {
        $("div:eq(4) p + p span:nth-child(2)").text("I was Changed.");


    });
    
    $("#btnTogglePs").click(function () {
        
        $("#btnTogglePs").text("Show All Ps");
        $("p").each(function () {
            $("p").hide();
        });
    });

     
    $("#btnTogglePs").dblclick(function () {
         
        $("#btnTogglePs").text("Hide All Ps");
        $("p").each(function () {
            $("p").show();
        });
    });


});
