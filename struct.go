package main

type NotesType struct{
	Id int 			`json:"id"`
	Title string 	`json:"title"`
	Text string 	`json:"text"`
	Author string 		`json:"author"`
}

type Users struct{
	Id int 
	Login string
}