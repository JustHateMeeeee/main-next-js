package main

import (
	"fmt"
	"net/http"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var router *gin.Engine

func main() {

	e := ConnectPostgres()
	if e != nil{
		fmt.Print(e.Error())
	}
	
	router = gin.Default()

	//config CORS 
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"POST", "GET", "PUT"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	router.Static("assets", "./assets")
	router.LoadHTMLGlob("html/*.html")
	router.GET("/", func(context *gin.Context) {
		context.HTML(http.StatusOK, "index.html", nil)
	})

	router.POST("/createNote", createNote)
	router.PUT("/updateNote", updateNote)
	router.DELETE("/deleteNote", deleteNote)
	router.GET("/getAllNotes", getAllNotes)

	_ = router.Run("127.0.0.1:8080")
}


func createNote(context *gin.Context) {
	var note *NotesType

	err := context.BindJSON(&note)

	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		fmt.Println(err.Error())
		return 
	}

	err = Create(note)

	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		fmt.Println(err.Error(), 2)
		return
	}

	context.JSON(http.StatusOK, nil)
}




func updateNote(context *gin.Context) {
	var note *NotesType

	err := context.BindJSON(&note)

	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		fmt.Println(err.Error())

		return
	}
	
	err = Update(note)

	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		fmt.Println(err.Error())
		return
	}

	context.JSON(http.StatusOK, nil)

}

// delete note
func deleteNote(context *gin.Context) {
	var note *NotesType

	err := context.BindJSON(&note)

	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		fmt.Println(err.Error(), 1)
		return 
	}
	
	err = Delete(note)
	
	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		fmt.Println(err.Error(), 2)
		return 
	}

	context.JSON(http.StatusOK, nil)
	return
}

// output all notes
func getAllNotes(context *gin.Context) {
	data, err := GetNotes()

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"data": data,
	})

}
