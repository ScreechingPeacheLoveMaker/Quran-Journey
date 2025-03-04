import { useState } from "react";

const FileManager = () => {
    const [filename, setFilename] = useState("test.txt");
    const [message, setMessage] = useState("")
    const [journal, setJournal] = useState("")

    const handleWrite = async () => {
        const res = await window.fileCRUD.writeFile(filename, journal);
        setMessage(res.message);
    }

    const handleRead = async () => {
        const res = await window.fileCRUD.readFile(filename);
        if (res.success) setJournal(res.data);
        else setMessage(res.message);
    }

    const handleDelete = async () => {
        const res = await window.fileCRUD.deleteFile(filename);
        setMessage(res.message);
        setJournal("");
    }

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Create a Journal</h2>
            <input className="border p-2 w-full" value={filename} onChange={(e) => setFilename(e.target.value)} placeholder="Enter surah name" />
            <textarea className='border p-2 w-full mt-2' value={journal} onChange={(e) => setJournal(e.target.value)} placeholder="What your thought on this surah"></textarea>
            <div className="mt-4 flex gap-2">
                {["save", "Delete"]}
            </div>

        </div>
    )
}