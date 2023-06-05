package main

import (
	_ "encoding/json"
	_ "fmt"
	"net/http"
	"github.com/gin-gonic/gin"
)
var router *gin.Engine
func main() {
	ConnectPostgres()
    router = gin.Default()

	router.LoadHTMLGlob("html/*.html")
	
	router.POST("/createNote", createNote)
	router.PATCH("/updateNote", updateNote)
	router.DELETE("/deleteNote", deleteNote)
	router.GET("/getAllNotes", getAllNotes)
	
	_ = router.Run("127.0.0.1:8080")
}


	func createNote(context *gin.Context){
		var note *NotesType

		err := context.BindJSON(&note)

		if err != nil{
			context.JSON(http.StatusInternalServerError, nil)
			return
		}

		err = Create(note)
		if err != nil{
			context.JSON(http.StatusInternalServerError, nil)
			return
		}

		context.JSON(http.StatusOK, nil)
	}



	func updateNote(context *gin.Context){
		var note *NotesType
		err := context.BindJSON(&note)
		if err != nil{
			context.JSON(http.StatusInternalServerError, nil)
			return
		}
		err = Update(note)
		if err != nil{
			context.JSON(http.StatusInternalServerError, nil)
			return
		}

		context.JSON(http.StatusOK, nil)

		
	}


	func deleteNote(context *gin.Context){
		var note *NotesType
		err := context.BindJSON(&note)
		if err != nil{
			context.JSON(http.StatusInternalServerError, nil)
			return
		}
		err = Delete(note)
		if err != nil{
			context.JSON(http.StatusInternalServerError, nil)
			return
		}

		context.JSON(http.StatusOK, nil)

		
	}

	func getAllNotes(context *gin.Context){
		var note *NotesType
		err := context.BindJSON(&note)
		if err != nil{
			context.JSON(http.StatusInternalServerError, nil)
			return
		}
		data, err := GetNotes(note)

		if err != nil{
			context.JSON(http.StatusInternalServerError, nil)
			return
		}
		context.JSON(http.StatusOK, gin.H{
			"data": data,
		})
	}