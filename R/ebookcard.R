tag_Ebookcard <-function(){
 tags$div(class = "ebookcard",
 tags$div(class = "ebookcard-icon",
   tags$div(class = "ebookcard-icon-icon"),
   tags$div(class = "ebookcard-icon-iconName")),
 tags$div(class = "ebookcard-pill",
   tags$div(class = "ebookcard-pill-availability",
     tags$div(class = "ebookcard-pill-availability-icon"),
     tags$div(class = "ebookcard-pill-availability-number")),
   tags$div(class = "ebookcard-pill-action",
     tags$div(class = "ebookcard-pill-action-type"))))
}
Ebookcard_dependency <- function(){
htmltools::htmlDependency(
  name="Ebookcard",
  version="1.0.0",
  src=c(file=normalizePath(".")),
  style="Ebookcard.css",
  all_files = F
)}
ui_Ebookcard <- function(dependency=NULL){
    library(htmltools)
  tagList(tag_Ebookcard(), Ebookcard_dependency(), dependency)
}
# ui_Ebookcard() |> htmltools::save_html("./R/ebookcard.html")
print(ui_Ebookcard())