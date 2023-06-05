package main

type NotesType struct{
	Id int 			`json:"id"`
	Title string 	`json:"title"`
	Text string 	`json:"text"`
	Category string `json:"category"`
	Author int 	`json:"author"`
}

type Users struct{
	Id int 
	Login string
}