import type { Request, Response } from 'express';

export type RouteHandler = (req: Request, res: Response) => void;
