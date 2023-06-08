$(".add-btn").on("click", function () {
  if ($(".task-input").val() == "") {
    return;
  }
  $(".tasks-list").append(
    `
        <li class="task-item">
            <p class="task-text">${$(".task-input").val()}</p>
            <div class="task-btns">
              <button class="item-btn">done</button> <button class="item-btn">delete</button>
            </div>
          </li>
        `
  );

  $('.item-btn').on("click", function(){
   $(this).parents('.task-item').remove();
})

  $(".task-input").val("");
  $(".task-input").focus()
});


