package browser

import (
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
)


type Browser struct {
	Name    string
 }

 func NewBrowser(name string) *Browser {
	return &Browser{
		Name: name,
	}
 }

type DirEntryJs struct {
		Name string `json:"name"`
		IsDir bool `json:"isDir"`
}

func NewDirEntryJs(name string, isDir bool) *DirEntryJs {
	return &DirEntryJs{
		Name: name,
		IsDir: isDir,
	}
 }


// load directory contents
func (b *Browser) GetDirEntries (dir string)  {

    // Open the directory.
    outputDirRead, _ := os.Open(dir)

    // Call ReadDir to get all files.
    outputDirFiles, _ := outputDirRead.ReadDir(0)


		//slice for dirEntries json
		var dirEntriesJs []DirEntryJs


    // Loop over files.
    for outputIndex := range(outputDirFiles) {
        outputFileHere := outputDirFiles[outputIndex]

        // Get name of file.
        outputNameHere := outputFileHere.Name()

				var isDir bool

				// determine isDir
				if (outputFileHere.IsDir()) {
					isDir = true
				} else {
					isDir = false
				}

        // Print name.
        //fmt.Println(outputNameHere)

				outputDirEntryJS := NewDirEntryJs(outputNameHere, isDir)

				//fmt.Println(outputDirEntryJS)

				dirEntriesJs = append(dirEntriesJs, *outputDirEntryJS)

				
    }
		

		// j, _ := json.Marshal(dirEntriesJs)
		// log.Println(string(j))
	
		j, _ := json.MarshalIndent(dirEntriesJs, "", "  ")
		log.Println(string(j))
}


// recursively walk a directory tree
func (b *Browser) WalkBrowser(browserName string, dirPath string) {
	err := filepath.WalkDir(dirPath, func(path string, d fs.DirEntry, err error) error {
		fmt.Println(path, d.Name(), "directory?", d.IsDir())
		return nil
	})
	if err != nil {
		log.Fatalf("impossible to walk directories: %s", err)
	}
}


