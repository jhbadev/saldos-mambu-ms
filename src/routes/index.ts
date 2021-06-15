import express from 'express';
import healthRoutes from '../app/components/healthcheck/health.routes';
import mambuRoutes from '../app/components/mambu/mambu.routes';

const appRoutes = express();

const base = '/api/v2/';

appRoutes.use(base, healthRoutes);
appRoutes.use(base, mambuRoutes)



export default appRoutes;
