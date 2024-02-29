package main

import (
	"fmt"
	"os"
)


type Entry struct {
	Name    string
	Size    int64
	Mode    os.FileMode
	ModTime string
	IsDir   bool
 }

 type EntryTree struct {
	FileTree    []Entry
 }

 // NewApp creates a new App application struct
func NewEntry() *Entry {
	return &Entry{
		Name: "Test",
	}
}

func (e *Entry) TestCall(path string)  {
fmt.Println(path)
	
}