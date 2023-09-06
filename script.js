$(document).ready(() => {
    $("#addTask").click(() => {
        const taskText = $("#task").val();
        if (taskText !== "") {
            let listItem = $("<li></li>").text(taskText);
            let deleteButton = $("<button><i class='fa-solid fa-trash fa-lg' style='color: #e40c37;'></i></button>").addClass("btn btn-sm delete");
            listItem.append(deleteButton);
            $("#taskList").append(listItem);
            $("#task").val('');
        }
    });

    $("#taskList").on("click", ".delete", function () {
        $(this).parent().remove();
    });

    $("#task").keypress((event) => {
        if (event.keyCode === 13) {
            $('#addTask').click();
        }
    });
});

