package main

import (
	_ "encoding/json"
	"fmt"
	_ "fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var router *gin.Engine

func main() {
	ConnectPostgres()
	router = gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"https://web.postman.co/workspace/My-Workspace~3ec9e007-72ee-479b-8d8f-f51560e44c10/request/create?requestId=1caabc6f-27b8-4301-8577-a51218404e24"},
		AllowMethods:     []string{"POST", "GET", "PATCH"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	router.LoadHTMLGlob("html/*.html")
	router.GET("/", func(context *gin.Context) {
		context.HTML(http.StatusOK, "index.html", nil)
	})

	router.POST("/createNote", createNote)
	router.PATCH("/updateNote", updateNote)
	router.DELETE("/deleteNote", deleteNote)
	router.GET("/getAllNotes", getAllNotes)

	_ = router.Run("127.0.0.1:8080")
}

func createNote(context *gin.Context) {
	var note *NotesType

	err := context.BindJSON(&note)

	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		return
	}

	err = Create(note)
	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		return
	}

	context.JSON(http.StatusOK, nil)
}

func updateNote(context *gin.Context) {
	var note *NotesType
	err := context.BindJSON(&note)
	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		return
	}
	
	err = Update(note)
	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		return
	}

	context.JSON(http.StatusOK, nil)

}

func deleteNote(context *gin.Context) {
	var note *NotesType
	err := context.BindJSON(&note)
	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		return
	}
	err = Delete(note)
	if err != nil {
		context.JSON(http.StatusInternalServerError, nil)
		return
	}

	context.JSON(http.StatusOK, nil)

}

// some problem

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
