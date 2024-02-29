package files

import (
	"fmt"
	"strings"

	"github.com/karrick/godirwalk"
)

func getDirectoryList(url string)  {

dirname := "url"
err := godirwalk.Walk(dirname, &godirwalk.Options{
		Callback: func(osPathname string, de *godirwalk.Dirent) error {
				// Following string operation is not most performant way
				// of doing this, but common enough to warrant a simple
				// example here:
				if strings.Contains(osPathname, ".git") {
						return godirwalk.SkipThis
				}
				fmt.Printf("%s %s\n", de.ModeType(), osPathname)
				return nil
		},
		Unsorted: true, // (optional) set true for faster yet non-deterministic enumeration (see godoc)


})

if err != nil {
	fmt.Println(err)
}

}


