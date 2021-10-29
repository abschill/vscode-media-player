import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    //console.log( context );
	const disposable = vscode.commands.registerCommand('vscode-media-player.playVideo', async () => {
		const url = await vscode.window.showInputBox();
        if( url ) {
            // console.log( searchQry );
            const panel = vscode.window.createWebviewPanel( 'video', 'My Video', vscode.ViewColumn.One, {
                enableScripts: true,
                enableFindWidget: true
            } );
            
            panel.webview.html = `
            <html>
            <head>
            <meta
            ontent="default-src *; media-src *;"
            />
            </head>
            <body>
            <video src="${url}" width="800" height="600" controls preload="auto">
            </video>
            </body>
            </html>`;
            panel.reveal();
        }
        
	});
	context.subscriptions.push( disposable );
}



// this method is called when your extension is deactivated
export function deactivate() {}
