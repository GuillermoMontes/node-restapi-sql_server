export default {
    getAllTalks : "SELECT * FROM allTasks",
    createTalk : "INSERT INTO allTasks (title,description) VALUES (@title, @description)",
    getTalkById: "SELECT * FROM allTasks Where Id = @id",
    deleteTalk: "DELETE FROM allTasks WHERE Id = @Id",
    actualizarTask: "UPDATE allTasks SET title = @title, description = @description WHERE id = @id" 
}