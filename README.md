## STEP 1: Download the project code:

### Option 1 - Cloning the repository to your GitHub profile

>  use this option, you need to have [Git](https://git-scm.com/downloads) installed and configured on your computer. If it is not installed or you're unsure, proceed with **Option 2** and download the project's .zip file.

1. **Fork** the project by clicking the **Fork** button at the top right of the page;
2. **Clone** the repository to your computer:
  - Click the **<> Code** button and copy the remote repository address;
  - Open the terminal, navigate to the root folder where you want to download the project, and run the command `git clone <remote address>`;
  - You can access the project folder directly through Visual Studio Code by clicking File > Open Folder and selecting the project folder.

### Option 2 - Downloading a .zip file

1. Click the **<> Code** button, then click the **Download ZIP** button;
2. A zipped folder will be downloaded to the downloads folder determined by your browser;
3. Extract the files by clicking the zipped folder icon and transfer the files to your preferred project folder.

## STEP 2: Install the project:

### Option 1 - Using the Visual Studio Code terminal

1. Open the project folder in Visual Studio Code by clicking File > Open Folder and selecting the project folder;
2. Click Terminal > New Terminal in the top menu of Visual Studio Code. The terminal should open, already directing to the correct project folder;
3. Run the command `npm install` and wait for it to finish.

### Option 2 - Using other terminals

1. Open your preferred terminal and navigate to the project folder using navigation commands like `cd <folder>`;
2. With the prompt pointing to the root of the project folder, run the command `npm install` and wait for it to finish.

## STEP 3: Run the project to start the local server:

Access the terminal (from Visual Studio Code or another), make sure it is displaying the correct project folder, and run the command `npm run dev`. The terminal should return:

```
> dev
> npx parcel --port 8000 index.html

Server running at http://localhost:8000
✨ Built in xxxms
```

The project will be available at http://localhost:8000, and you can access it in your preferred browser.
