## Instead of writing `console.log()` every time, you can add a shortcut in VS Code.

# Tips : 1 
In this example, I am making the text `cc` auto-expand into `console.log()` when you hit Tab. 

Here’s how:
1) Open Command Palette (Ctrl + Shift + P)
2) Search for "Snippets: Configure Snippets"
3) Select JavaScript and add this:
{
 "Console Log Shortcut": {
 "prefix": "cc",
 "body": "console.log($1);",
 "description": "Shortcut for console.log()"
 }
 }

Now, type cc, hit Tab, and boom, instant `console.log()` with your cursor inside the parentheses!


# Tips 2
This GitHub trick will blow your mind! 🤯

Did you know you can chat with any GitHub repository? Simply add "chat.for" before "github.com" in the repo URL! ✨

Perfect for:
✅ Understanding large codebases instantly
✅ Debugging complex projects faster
✅ Learning from open-source like never before