import { app } from "electron";
import fs from "fs";
import path from "path";

// Functions to get the file path in the apps user data directory
const filePath = (filename) => path.join(app.getPath("desktop"), filename);

// write file
export const writeFile = async (filename, content) => {
    try {
        fs.writeFileSync(filePath(filename), content, "utf-8");
        return { success: true, message: "File saved successfully!" }
    } catch (error) {
        return { success: false, message: error.message }
    }
};

// read file
export const readFile = async (filename) => {
    try {
        if (!fs.existsSync(filePath(filename))) throw new Error("File Not Found");
        const data = fs.readFileSync(filePath(filename), "utf-8");
        return { success: true, data };
    } catch (error) {
        return { success: false, message: error.message };
    }
}


// delete file
export const deleteFile = async (filename) => {
    try {
        if (!fs.existsSync(filePath(filename))) throw new Error("File Not Found");
        fs.unlinkSync(filePath(filename))
        return { success: true, message: "File deleted!" }
    } catch (error) {
        return { success: false, message: error.message }
    }
}
