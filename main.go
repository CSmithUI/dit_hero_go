package main

import (
	"embed"

	"github.com/CSmithUI/dit_hero_go/browser"
	cp "github.com/otiai10/copy"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"

	"fmt"
)

//go:embed all:frontend/dist
var assets embed.FS


func main() {
	// Create an instance of the app structure
	app := NewApp()

	entry := NewEntry()

	browser := browser.NewBrowser("source")


	errCp := cp.Copy("/Users/nullst8/Downloads", "/Users/nullst8/Downloads/testDest")
	fmt.Println(errCp) // nil


	// Create application with options
	err := wails.Run(&options.App{
		Title:  "DIT Hero",
		Width:  1224,
		Height: 968,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			entry,
			browser,
		},
		Mac: &mac.Options{
			About: &mac.AboutInfo{
					Title:   "DIT Hero",
					Message: "© 2024 Speal Thunder Films inc",
			},
	},
	})

	if err != nil {
		println("Error:", err.Error())
	}


}
