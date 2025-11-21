import fs from "fs";
import path from "path";
import * as tar from "tar";

// setting up the path to archive
const logsBaseDir = path.join(process.cwd(), "logs");
const dailyLogsDir = path.join(logsBaseDir, "daily");
const errorLogsDir = path.join(logsBaseDir, "error");
const archiveDir = path.join(logsBaseDir, "archived");

// Ensure archive dir exists and is clean
if (fs.existsSync(archiveDir)) {
    fs.rmSync(archiveDir, { recursive: true, force: true });
}
fs.mkdirSync(archiveDir, { recursive: true });

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const archiveName = `logs-${timestamp}.tar.gz`;
const archivePath = path.join(archiveDir, archiveName);

async function archiveLogs() {
    const dailyFiles = fs.readdirSync(dailyLogsDir).map(f => path.join("daily", f));
    const errorFiles = fs.readdirSync(errorLogsDir).map(f => path.join("error", f));
    const filesToArchive = [...dailyFiles, ...errorFiles];

    if (filesToArchive.length === 0) {
        console.log("No logs to archive.");
        return;
    }

    console.log("Archiving logs...");

    await tar.create(
        {
            gzip: true,
            file: archivePath,
            cwd: logsBaseDir // Use logsBaseDir as cwd for relative paths
        },
        filesToArchive
    );

    // Delete original logs
    for (const file of dailyFiles) {
        fs.unlinkSync(path.join(logsBaseDir, file));
    }
    for (const file of errorFiles) {
        fs.unlinkSync(path.join(logsBaseDir, file));
    }

    console.log(`Archive created: ${archivePath}`);
}

archiveLogs().catch(err => {
    console.error("Archiving failed:", err);
    process.exit(1);
});
