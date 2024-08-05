import { Request, Response } from 'express';
import os from 'os';

export const getPing = (req: Request, res: Response): void => {
    const start = process.hrtime();

    // Calculate the response time
    const diff = process.hrtime(start);
    const responseTimeInMs = (diff[0] * 1e9 + diff[1]) / 1e6;

    // Get system information
    const uptime = Math.floor(os.uptime());
    const memoryUsage = process.memoryUsage();
    const memoryUsageUsed = (memoryUsage.rss / 1024 / 1024).toFixed(2);
    const memoryUsageFree = ((os.freemem() / 1024 / 1024)).toFixed(2);
    const memoryUsageTotal = ((os.totalmem() / 1024 / 1024)).toFixed(2);
    const currentDateTime = new Date().toLocaleString();
    const osInfo = {
        platform: os.platform(),
        type: os.type(),
        release: os.release(),
        architecture: os.arch()
    };

    const cpuInfo = {
        model: os.cpus()[0].model,
        cores: os.cpus().length,
        speed: os.cpus()[0].speed
    };

    const networkInterfaces = os.networkInterfaces();
    const ipAddress = Object?.values(networkInterfaces)
        .flat()
        .find((iface: os.NetworkInterfaceInfo | undefined) => iface?.family === 'IPv4' && !iface.internal)?.address || 'N/A';


    res.render('../././public/ping', {
        responseTime: responseTimeInMs.toFixed(2),
        uptime: uptime,
        memoryUsageUsed: memoryUsageUsed,
        memoryUsageFree: memoryUsageFree,
        memoryUsageTotal: memoryUsageTotal,
        currentDateTime: currentDateTime,
        osInfo: osInfo,
        cpuInfo: cpuInfo,
        ipAddress: ipAddress
    });
};