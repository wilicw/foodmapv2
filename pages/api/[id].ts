// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { errorHandler } from '../../middleware/errorHandler';
import connectdb from '../../schema/db';
import Store from '../../schema/store';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    await connectdb();
    const data = await Store.findById(req.query.id);
    if (data) res.status(200).json(data);
    else throw "Store not found.";
  } catch (error: any) {
    errorHandler(error, res);
  }
}

export default handler;