package main

import (
	"fmt"
	"os"
	"context"
	_"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5"
	"github.com/joho/godotenv"
)
	var conn *pgx.Conn

	func ConnectPostgres() error{
		var err error

		if err = godotenv.Load(); err != nil {
			fmt.Println((err.Error()))
			return err
		}
		dbUrl, _ := os.LookupEnv("DATABASE_URL")

		conn, err = pgx.Connect(context.Background(), dbUrl)
		if err != nil {
			return err
		}

		err = conn.Ping(context.Background())
		if err != nil{
			panic(err.Error())
		}

		return nil
	}

	func Create(notes *NotesType) error{
		_, e := conn.Exec(context.Background(),`INSERT INTO "Notes" ("Title", "Text", "Category", "Author", "Time") VALUES (1$, 2$, 3$, 4$, CURRENT_TIMESTAMP)`, notes.Title, notes.Text, notes.Category, notes.Author)
		if e != nil{
			fmt.Println(e.Error())
		}
			return e	
	}

	func Update(notes *NotesType) error{
		_, e := conn.Exec(context.Background(),`UPDATE "Notes" SET Title = $1, Text = $2 WHERE id = $3`, notes.Title, notes.Text, notes.Id)
		if e != nil{
			fmt.Println(e.Error())
		}
		return e	

	}


	func GetNotes(notes *NotesType)([]NotesType, error){
		row, e := conn.Query(context.Background(), `SELECT * FROM "notes"`)
		if e != nil{
			return nil, e
		} 
		var note NotesType
		var notesArr = make([]NotesType, 0)
		for row.Next(){
			notesArr = append(notesArr, note)
		}
		e = row.Err()

			if e != nil {
				return nil, e
			}

		return notesArr, nil
	}
	

	func Delete(notes *NotesType) error{
		_, e := conn.Exec(context.Background(),`DELETE FROM "notes" WHERE id = $1`, notes.Id)
		if e != nil{
			fmt.Println(e.Error())
		}
		return e	

	}






















// func Connect(){
// 	var e error

// 	conn, e = sql.Open("postgres", `host=localhost 
// 		port=5432 
// 		user=postgres
// 		password=0000
// 		dbname=WriteBook
// 		sslmode=disable`)
// 	if e != nil {
// 		panic(e.Error())
// 	}

// 	e = conn.Ping()
// 	if e != nil{
// 		panic(e.Error())
// 	}
// }