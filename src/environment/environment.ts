import dotenv from 'dotenv';
dotenv.config();

export const APPLICATION = {
    PORT: process.env.PORT
};

export const MS_SALDOS = {
    URL: process.env.MS_ARCHIVE_SAVING_URL as string,
    BASE: process.env.MS_ARCHIVE_SAVING_BASE,
    VERSION: process.env.MS_ARCHIVE_SAVING_VERSION,
    GET_STATE: process.env.MS_ARCHIVE_SAVING_GET_STATE as string
};
