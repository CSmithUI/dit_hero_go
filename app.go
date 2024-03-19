package main

import (
	"context"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods	
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
// func (a *App) GetDir() string {

// 	// DefaultDirectory           string
// 	// DefaultFilename            string
// 	// Title                      string
// 	// Filters                    []FileFilter
// 	// ShowHiddenFiles            bool
// 	// CanCreateDirectories       bool
// 	// ResolvesAliases            bool
// 	// TreatPackagesAsDirectories bool


// 	path, err := runtime.OpenDirectoryDialog(a.ctx, dialogOptions)

// 	return path || err
// }

// Greet returns a greeting for the given name
// func (a *App) Greet(name string) string {
// 	return fmt.Sprintf("Hello %s, It's show time!", name)
// }


